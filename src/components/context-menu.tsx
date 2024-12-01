"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ContextMenuProps {
  x: number
  y: number
  onClose: () => void
  onAskAI: () => void
}

export default function ContextMenu({ x, y, onClose, onAskAI }: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

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
  
      // Check if the range is already highlighted
      const parentElement = range.commonAncestorContainer.parentElement;
  
      if (parentElement?.tagName === 'SPAN' && parentElement.style.backgroundColor === 'yellow') {
        // Unhighlight by replacing the span with its text content
        const span = parentElement as HTMLSpanElement;
        const parent = span.parentNode;
        if (parent) {
          while (span.firstChild) {
            parent.insertBefore(span.firstChild, span);
          }
          parent.removeChild(span);
        }
      } else {
        // Highlight the selected text
        const span = document.createElement('span');
        span.style.backgroundColor = 'yellow';
        span.appendChild(range.extractContents());
        range.insertNode(span);
        selection.removeAllRanges(); // Deselect the text after highlighting
      }
    }
  };
  

  const menuItems = [
    { label: 'Ask AI', action: onAskAI },
    { label: 'Copy', action: () => document.execCommand('copy') },
    { label: 'Highlight', action: highlightText },
    { label: 'Search', action: () => console.log('Search action') },
  ]

  return (
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
                onClose()
              }}
              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-[#4b5162] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
