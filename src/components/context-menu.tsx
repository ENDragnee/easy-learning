"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ContextMenuProps {
  x: number
  y: number
  onClose: () => void
}

export default function ContextMenu({ x, y, onClose }: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const [showModal, setShowModal] = useState(false)
  const [aiResponse, setAiResponse] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  const handleAskAI = async () => {
    setIsLoading(true);
    setShowModal(true);
    setAiResponse(''); // Clear previous response
    
    const selection = window.getSelection();
    const selectedText = selection?.toString();
  
    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: selectedText }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const reader = response.body?.getReader();
      if (!reader) return;
  
      let responseText = '';
      let buffer = '';
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        // Convert the Uint8Array to a string and add to buffer
        buffer += new TextDecoder().decode(value);
        
        // Try to process complete JSON objects from the buffer
        try {
          // Remove the opening and closing brackets
          const cleanBuffer = buffer.replace(/^\[|\]$/g, '').trim();
          
          // Split by newlines and process each line
          const lines = cleanBuffer.split('\n');
          
          for (const line of lines) {
            if (line.trim()) {
              // Remove trailing comma if it exists
              const jsonStr = line.replace(/,$/, '');
              try {
                const jsonObj = JSON.parse(jsonStr);
                if (jsonObj.content) {
                  responseText += jsonObj.content;
                  setAiResponse(responseText);
                }
              } catch (e) {
                // Ignore parsing errors for incomplete JSON objects
              }
            }
          }
        } catch (e) {
          // Continue accumulating the buffer if we can't parse it yet
          console.error('Error processing chunk:', e);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setAiResponse('Error getting AI response');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  const highlightText = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const parentElement = range.commonAncestorContainer.parentElement;
  
      if (parentElement?.tagName === 'SPAN' && parentElement.style.backgroundColor === 'yellow') {
        const span = parentElement as HTMLSpanElement;
        const parent = span.parentNode;
        if (parent) {
          while (span.firstChild) {
            parent.insertBefore(span.firstChild, span);
          }
          parent.removeChild(span);
        }
      } else {
        const span = document.createElement('span');
        span.style.backgroundColor = 'yellow';
        span.appendChild(range.extractContents());
        range.insertNode(span);
        selection.removeAllRanges();
      }
    }
  };

  const menuItems = [
    { label: 'Ask AI', action: handleAskAI },
    { label: 'Copy', action: () => document.execCommand('copy') },
    { label: 'Highlight', action: highlightText },
    { label: 'Search', action: () => console.log('Search action') },
  ]

  return (
    <>
      <AnimatePresence>
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.1 }}
          className="fixed z-50 bg-white dark:bg-[#383c4a] rounded-lg shadow-lg overflow-hidden"
          style={{ left: x, top: y }}
        >
          <div className="py-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.action()
                  if (item.label !== 'Ask AI') onClose()
                }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-[#4b5162] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* AI Response Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white dark:bg-[#383c4a] rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">AI Response</h2>
                <button
                  onClick={() => {
                    setShowModal(false)
                    onClose()
                  }}
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
  )
}