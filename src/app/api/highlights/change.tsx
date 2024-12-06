import Mark from 'mark.js';


interface HighlightInstance {
    id: string;
    text: string;
    color: string;
    startOffset?: number;
    endOffset?: number;
  }

const highlightText = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
  
    const range = selection.getRangeAt(0);
    if (range.collapsed) return;
  
    const container = document.getElementById('content'); // Replace with your content container ID
    if (!container) return;
  
    const marker = new Mark(container);
    const selectedText = range.toString();
    const isDarkMode = document.documentElement.classList.contains('dark');
    const highlightColor = isDarkMode ? '#5294e2' : 'yellow';
  
    // Check if text is already highlighted
    const markElement = range.commonAncestorContainer.parentElement?.closest('mark');
    
    if (markElement) {
      // Remove highlight
      marker.unmark({
        done: () => {
          // Here you can remove the highlight from your database
          const highlightId = markElement.dataset.highlightId;
          if (highlightId) {
            removeHighlightFromDatabase(highlightId);
          }
        }
      });
    } else {
      // Add new highlight
      const highlightId = generateUniqueId();
      const highlightInstance: HighlightInstance = {
        id: highlightId,
        text: selectedText,
        color: highlightColor,
        startOffset: range.startOffset,
        endOffset: range.endOffset
      };
  
      marker.mark(selectedText, {
        'element': 'mark',
        'className': 'custom-highlight',
        'acrossElements': true,
        'separateWordSearch': false,
        'done': (totalMarks) => {
          // Add custom attributes to the marked element
          const marks = document.querySelectorAll('mark.custom-highlight');
          marks.forEach(mark => {
            if (mark.textContent === selectedText) {
              (mark as HTMLElement).dataset.highlightId = highlightId;
              (mark as HTMLElement).style.backgroundColor = highlightColor;
            }
          });
          
          // Save highlight to database
          saveHighlightToDatabase(highlightInstance);
        }
      });
    }
  
    // Clear selection
    selection.removeAllRanges();
  };
  
  // Helper functions
  const generateUniqueId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };
  
  const saveHighlightToDatabase = async (highlight: HighlightInstance) => {
    // Implement your database save logic here
    try {
      // Example:
      // await api.post('/highlights', highlight);
      console.log('Saved highlight:', highlight);
    } catch (error) {
      console.error('Error saving highlight:', error);
    }
  };
  
  const removeHighlightFromDatabase = async (highlightId: string) => {
    // Implement your database remove logic here
    try {
      // Example:
      // await api.delete(`/highlights/${highlightId}`);
      console.log('Removed highlight:', highlightId);
    } catch (error) {
      console.error('Error removing highlight:', error);
    }
  };
  
  // Function to restore highlights from database
  const restoreHighlights = async () => {
    try {
      // Fetch highlights from database
      // const highlights = await api.get('/highlights');
      const highlights: HighlightInstance[] = []; // Replace with your actual data
  
      const container = document.getElementById('content');
      if (!container) return;
  
      const marker = new Mark(container);
  
      highlights.forEach(highlight => {
        marker.mark(highlight.text, {
          'element': 'mark',
          'className': 'custom-highlight',
          'acrossElements': true,
          'separateWordSearch': false,
          'done': () => {
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
