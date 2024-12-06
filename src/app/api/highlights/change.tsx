import Mark from 'mark.js';

interface HighlightInstance {
  id: string;
  text: string;
  color: string;
  grade: string;
  course: string;
  chapter: string;
  sub_chapter: string;
  startOffset?: number;
  endOffset?: number;
}

const highlightText = async (grade: string, course: string, chapter: string, sub_chapter: string) => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  if (range.collapsed) return;

  const container = document.getElementById('content');
  if (!container) return;

  const marker = new Mark(container);
  const selectedText = range.toString();
  const isDarkMode = document.documentElement.classList.contains('dark');
  const highlightColor = isDarkMode ? '#5294e2' : 'yellow';

  // Check if text is already highlighted
  const markElement = range.commonAncestorContainer.parentElement?.closest('mark');
  
  if (markElement) {
    // Remove highlight
    const highlightId = markElement.dataset.highlightId;
    if (highlightId) {
      await removeHighlightFromDatabase(highlightId);
      marker.unmark({
        done: () => {
          console.log('Highlight removed');
        }
      });
    }
  } else {
    // Add new highlight
    const highlightInstance: HighlightInstance = {
      id: generateUniqueId(),
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
    marker.mark(selectedText, {
      element: 'mark',
      className: 'custom-highlight',
      acrossElements: true,
      separateWordSearch: false,
      done: () => {
        const marks = document.querySelectorAll('mark.custom-highlight');
        marks.forEach(mark => {
          if (mark.textContent === selectedText) {
            (mark as HTMLElement).dataset.highlightId = highlightInstance.id;
            (mark as HTMLElement).style.backgroundColor = highlightColor;
          }
        });
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

export const saveHighlightToDatabase = async (highlight: HighlightInstance) => {
  try {
    const response = await fetch('/api/highlights', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(highlight),
    });

    if (!response.ok) {
      throw new Error('Failed to save highlight');
    }

    console.log('Highlight saved:', await response.json());
  } catch (error) {
    console.error('Error saving highlight:', error);
    throw error;
  }
};

const removeHighlightFromDatabase = async (highlightId: string) => {
  try {
    const response = await fetch(`/api/highlights/${highlightId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete highlight');
    }

    console.log('Highlight removed:', await response.json());
  } catch (error) {
    console.error('Error deleting highlight:', error);
    throw error;
  }
};

export const restoreHighlights = async (grade: string, course: string, chapter: string, sub_chapter: string) => {
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
