"use client";

import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { usePathname, useRouter } from 'next/navigation';
import { IoMdAdd } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { MdTab } from 'react-icons/md';
import { TbLayoutList } from 'react-icons/tb';
import Split from 'split.js';

interface Tab {
  id: string;
  path: string;
  title: string;
  params?: {
    grade?: string;
    course?: string;
    chapter?: string;
    subChapter?: string;
  };
}

const TabManager: React.FC = () => {
    const [tabs, setTabs] = useState<Tab[]>([]);
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isSplitMode, setIsSplitMode] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const tabManagerRef = useRef<HTMLDivElement>(null);
    const splitInstanceRef = useRef<Split.Instance | null>(null);
    const pathname = usePathname();
    const router = useRouter();
  
    useEffect(() => {
      if (tabs.length === 0) {
        const newTab = createNewTab(pathname);
        setTabs([newTab]);
        setActiveTab(newTab.id);
      }
    }, []);
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (tabManagerRef.current && !tabManagerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
    useEffect(() => {
        // Exit split mode if tabs are less than 2
        if (tabs.length < 2 && isSplitMode) {
          setIsSplitMode(false);
          
          // Clean up split view
          if (splitInstanceRef.current) {
            splitInstanceRef.current.destroy();
            splitInstanceRef.current = null;
            
            const splitContainer = document.getElementById('split-container');
            const originalContent = document.getElementById('content');
            
            if (splitContainer && originalContent) {
              splitContainer.parentNode?.insertBefore(originalContent, splitContainer);
              splitContainer.remove();
            }
          }
        }
      }, [tabs.length, isSplitMode]);
  
    const toggleSplitMode = () => {
        if (tabs.length <= 1) return; // Early return if not enough tabs
      if (!isSplitMode && tabs.length >= 2) {
        setIsSplitMode(true);
        
        // Create split view
        const contentElement = document.getElementById('content');
        if (contentElement) {
          // Clone the content for the second pane
          const clone = contentElement.cloneNode(true) as HTMLElement;
          clone.id = 'content-clone';
          
          // Create container for split views
          const splitContainer = document.createElement('div');
          splitContainer.id = 'split-container';
          splitContainer.className = 'flex h-full';
          
          // Wrap original content
          const wrapper1 = document.createElement('div');
          wrapper1.id = 'split-1';
          wrapper1.className = 'split-pane';
          
          // Wrap cloned content
          const wrapper2 = document.createElement('div');
          wrapper2.id = 'split-2';
          wrapper2.className = 'split-pane';
          
          // Move original content and append clone
          contentElement.parentNode?.insertBefore(splitContainer, contentElement);
          wrapper1.appendChild(contentElement);
          wrapper2.appendChild(clone);
          splitContainer.appendChild(wrapper1);
          splitContainer.appendChild(wrapper2);
          
          // Initialize Split.js
          splitInstanceRef.current = Split(['#split-1', '#split-2'], {
            sizes: [50, 50],
            minSize: 100,
            gutterSize: 8,
            cursor: 'col-resize'
          });
        }
      } else {
        setIsSplitMode(false);
        
        // Clean up split view
        if (splitInstanceRef.current) {
          splitInstanceRef.current.destroy();
          splitInstanceRef.current = null;
          
          const splitContainer = document.getElementById('split-container');
          const originalContent = document.getElementById('content');
          
          if (splitContainer && originalContent) {
            splitContainer.parentNode?.insertBefore(originalContent, splitContainer);
            splitContainer.remove();
          }
        }
      }
    };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (diff > 50) {
      setIsOpen(true);
    } else if (diff < -50) {
      setIsOpen(false);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  const createNewTab = (path: string): Tab => {
    const searchParams = new URLSearchParams(window.location.search);
    const grade = searchParams.get('grade') || undefined;
    const course = searchParams.get('course') || undefined;
    const chapter = searchParams.get('chapter') || undefined;
    const subChapter = searchParams.get('subChapter') || undefined;
  
    return {
      id: uuidv4(),
      path: `${path}?${searchParams.toString()}`, // Include query parameters in the path
      title: getTabTitle(path, searchParams),
      params: { grade, course, chapter, subChapter },
    };
  };

  const getTabTitle = (path: string, searchParams: URLSearchParams): string => {
    if (path === '/content') {
      const course = searchParams.get('course');
      const chapter = searchParams.get('chapter');
      const subChapter = searchParams.get('subChapter');
      if (course && chapter && subChapter) {
        return `${course.charAt(0).toUpperCase() + course.slice(1)} ${chapter}.${subChapter}`;
      }
    }
    const parts = path.split('/');
    return parts[parts.length - 1] || 'Home';
  };

  const addNewTab = () => {
    const newTab = createNewTab(pathname);
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
  };

  const removeTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (tabs.length === 1) return;

    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);

    if (activeTab === tabId) {
      const lastTab = newTabs[newTabs.length - 1];
      setActiveTab(lastTab.id);
      router.push(lastTab.path);
    }
  };

  const switchTab = (tab: Tab) => {
    setActiveTab(tab.id);
    router.push(tab.path); // Switch to the full path with query parameters
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && activeTab) {
      const searchParams = new URLSearchParams(window.location.search);
      const updatedPath = `${pathname}?${searchParams.toString()}`;
      setTabs((prevTabs) =>
        prevTabs.map((tab) =>
          tab.id === activeTab
            ? { ...tab, path: updatedPath, title: getTabTitle(pathname, searchParams) }
            : tab
        )
      );
    }
  }, [pathname, activeTab]); // Removed window.location.search from dependencies
  
  

  return (
    <>
      {/* Collapsed Pill */}
      {!isOpen && (
        <div
          className="fixed right-0 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white dark:bg-[#2d303a] rounded-l-full shadow-lg border border-r-0 border-gray-200 dark:border-[#4b5162] z-30"
          onClick={() => setIsOpen(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="p-2">
            <MdTab className="w-8 h-6" />
          </div>
        </div>
      )}

      {/* Expanded Tab Manager */}
      <div
        ref={tabManagerRef}
        className={`fixed top-[25%] h-[50vh] transform right-0 z-30 w-32 bg-white dark:bg-[#2d303a] rounded-l-lg shadow-lg transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
    >
        <div className="flex justify-between items-center p-2">
            <div className="flex items-center space-x-1">
                <button
                    onClick={addNewTab}
                    className="p-0.5 hover:bg-gray-100 dark:hover:bg-[#363945] rounded-md transition-colors"
                >
                    <IoMdAdd className="w-6 h-8 mr-6" />
                </button>
                <button
                    onClick={toggleSplitMode}
                    className={`p-0.5 rounded-md transition-colors ${
                        tabs.length <= 1 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-gray-100 dark:hover:bg-[#363945]'
                    } ${
                        isSplitMode ? 'bg-gray-200 dark:bg-[#4b5162]' : ''
                    }`}
                    disabled={tabs.length <= 1}
                >
                    <TbLayoutList className="w-6 h-8 ml-6" />
                </button>
            </div>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-[#4b5162] scrollbar-track-transparent">
          {tabs.map(tab => (
            <div
              key={tab.id}
              onClick={() => switchTab(tab)}
              className={`
                flex justify-between items-center p-1.5 cursor-pointer
                hover:bg-gray-100 dark:hover:bg-[#363945]
                ${activeTab === tab.id ? 'bg-gray-100 dark:bg-[#363945]' : ''}
                transition-colors
              `}
            >
              {/* <MdTab className="w-6 h-16 m-2" /> */}
              <span className="text-sm truncate flex-1 text-center m-4 pl-4">{tab.title}</span>
              <button
                onClick={(e) => removeTab(tab.id, e)}
                className="p-0.5 hover:bg-gray-200 dark:hover:bg-[#4b5162] rounded-md ml-1"
              >
                <IoClose className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TabManager;
