import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Mark from 'mark.js';
import {saveHighlightToDatabase} from '@/components/functions/saveHighlight'
import {removeHighlightFromDatabase} from '@/components/functions/removeHighlight'
import {HighlightInstance} from '@/components/interfaces/highlight'
interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
}

export default function ContextMenu({ x, y, onClose }: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [aiResponse, setAiResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const generateUniqueId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };
  
  const restoreHighlights = async (grade: string, course: string, chapter: string, sub_chapter: string) => {
    try {
      const response = await fetch(`/api/highlights?grade=${grade}&course=${course}&chapter=${chapter}&sub_chapter=${sub_chapter}`);
      if (!response.ok) {
        throw new Error('Failed to fetch highlights');
      }
  
      const highlights: HighlightInstance[] = await response.json();
  
      const container = document.getElementById('content');
      if (!container) return;
  
      const marker = new Mark(container);
  
      highlights.forEach(highlight => {
        marker.mark(highlight.text, {
          element: 'mark',
          className: 'custom-highlight',
          acrossElements: true,
          separateWordSearch: false,
          done: () => {
            const marks = document.querySelectorAll('mark.custom-highlight');
            marks.forEach(mark => {
              if (mark.textContent === highlight.text) {
                (mark as HTMLElement).dataset.highlightId = highlight.id;
                (mark as HTMLElement).style.backgroundColor = highlight.color;
              }
            });
          }
        });
      });
    } catch (error) {
      console.error('Error restoring highlights:', error);
    }
  };

  const handleAskAI = async (
    grade: string,
    course: string,
    chapter: string,
    sub_chapter: string,
    color: string = "red"
  ) => {
    console.log('Highlight and Ask AI button clicked');
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      console.log('No text selected or range count is 0');
      return;
    }
  
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    console.log('Selected text:', selectedText);
  
    const container = document.getElementById('content');
    if (!container) {
      console.error('Content container not found');
      return;
    }
    const marker = new Mark(container);
  
    // Check if the text is already highlighted
    const markElement = range.commonAncestorContainer.parentElement?.closest('mark');
  
    if (markElement) {
      // Remove highlight if it already exists
      const highlightId = markElement.dataset.highlightId;
      if (highlightId) {
        await removeHighlightFromDatabase(highlightId);
        marker.unmark({
          done: () => {
            console.log('Highlight removed');
          },
        });
      }
    } else {
  
      setIsLoading(true); // Start loading spinner
      setShowModal(true); // Show modal
      setAiResponse(''); // Clear previous response
  
      highlightText(grade, course, chapter, sub_chapter, color);  
      try {
        // Fetch AI response for the selected text
        const response = await fetch('/api/ai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ input: selectedText }),
        });
  
        if (!response.ok) throw new Error('Network response was not ok');
  
        const reader = response.body?.getReader();
        if (!reader) return;
  
        let responseText = '';
  
        // Read the stream and accumulate content
        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
  
          const chunk = decoder.decode(value, { stream: true });
          const parsedChunk = chunk.match(/{"content":"(.*?)"}/g);
  
          if (parsedChunk) {
            parsedChunk.forEach((jsonStr) => {
              const content = JSON.parse(jsonStr)?.content || '';
              responseText += content;
              setAiResponse(responseText); // Update modal with AI response
            });
          }
        }
      } catch (error) {
        console.error('Error:', error);
        setAiResponse('Error getting AI response');
      } finally {
        setIsLoading(false); // Stop loading spinner
      }
    }
  
    // Clear selection
    selection.removeAllRanges();
  };

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowModal(false);
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close context menu if the click is outside both the menu and the modal
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !showModal
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose, showModal]);

  const highlightText = async (
    grade: string, 
    course: string, 
    chapter: string, 
    sub_chapter: string, 
    color: string = "yellow"
  ) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      console.log('No text selected or range count is 0');
      return;
    }
  
    const range = selection.getRangeAt(0);
    const selectedText = range.toString().trim();
    if (!selectedText) {
      console.log('Selected text is empty');
      return;
    }
  
    const container = document.getElementById('content');
    if (!container) {
      console.error('Content container not found');
      return;
    }
  
    const isDarkMode = document.documentElement.classList.contains('dark');
    const highlightColor = isDarkMode ? color : color;
  
    // Check if text is already highlighted
    const markElement = range.commonAncestorContainer.parentElement?.closest('mark');
    if (markElement) {
      // Remove highlight
      const highlightId = markElement.dataset.highlightId;
      if (highlightId) {
        await removeHighlightFromDatabase(highlightId);
        markElement.replaceWith(document.createTextNode(markElement.textContent || ""));
        console.log('Highlight removed');
      }
    } else {
      // Wrap the selected text with a <mark> element
      const mark = document.createElement('mark');
      mark.className = 'custom-highlight';
      mark.style.backgroundColor = highlightColor;
      mark.dataset.highlightId = generateUniqueId();
      mark.textContent = selectedText;
  
      // Insert the mark element into the range
      range.deleteContents();
      range.insertNode(mark);
  
      // Save the highlight to the database
      const highlightInstance: HighlightInstance = {
        id: mark.dataset.highlightId!,
        text: selectedText,
        color: highlightColor,
        grade,
        course,
        chapter,
        sub_chapter,
        startOffset: range.startOffset,
        endOffset: range.endOffset,
      };
  
      await saveHighlightToDatabase(highlightInstance);
      console.log('Highlight added');
    }
  
    // Clear the selection
    selection.removeAllRanges();
  };
  

  const menuItems = [
    { label: 'Ask AI', action: handleAskAI },
    { label: 'Copy', action: () => document.execCommand('copy') },
    { label: 'Highlight', action: () => highlightText(`Grade12`, `Physics`, `Chapter1`, `3_1`) },
    {
      label: 'Search',
      action: () => {
        const selection = window.getSelection()?.toString();
        if (selection) {
          const query = encodeURIComponent(selection);
          window.open(`https://www.google.com/search?q=${query}`, '_blank');
        } else {
          alert('No text selected to search.');
        }
      },
    },
  ];

  return (
    <>
      <AnimatePresence>
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.1 }}
          className="fixed z-50 bg-white dark:bg-[#383c4a] rounded-lg shadow-lg overflow-hidden max-w-xs w-32 px-2"
          style={{ left: x, top: y }}
        >
          <div className="py-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.action('gradeValue', 'courseValue', 'chapterValue', 'subChapterValue');
                  if (item.label !== 'Ask AI') onClose(); // Close on click outside Ask AI
                }}
                className="w-full text-center px-4 py-2 rounded-lg  text-sm hover:bg-gray-100 dark:hover:bg-[#4b5162] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white dark:bg-[#383c4a] rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">AI Response</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                {isLoading ? (
                  <div className="flex items-center justify-center py-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
                  </div>
                ) : (
                  <div className="whitespace-pre-wrap">{aiResponse}</div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
