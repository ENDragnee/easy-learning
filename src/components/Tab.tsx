"use client";

import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { usePathname, useRouter } from 'next/navigation';
import { IoMdAdd } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { MdTab } from 'react-icons/md';

interface Tab {
  id: string;
  path: string;
  title: string;
}

const TabManager: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const tabManagerRef = useRef<HTMLDivElement>(null);
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

  const createNewTab = (path: string): Tab => ({
    id: uuidv4(),
    path: path,
    title: getTabTitle(path),
  });

  const getTabTitle = (path: string): string => {
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
    router.push(tab.path);
  };

  useEffect(() => {
    if (activeTab) {
      setTabs(prevTabs =>
        prevTabs.map(tab =>
          tab.id === activeTab ? { ...tab, path: pathname, title: getTabTitle(pathname) } : tab
        )
      );
    }
  }, [pathname]);

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
        className={`fixed top-[25%] h-[50vh] transform right-0 z-30 w-32 bg-white dark:bg-[#2d303a] rounded-l-lg shadow-lg border border-gray-200 dark:border-[#4b5162] transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex justify-between items-center p-2 border-b border-gray-200 dark:border-[#4b5162]">
          <span className="text-base font-medium">Tabs</span>
          <div className="flex items-center space-x-1">
            <button
              onClick={addNewTab}
              className="p-0.5 hover:bg-gray-100 dark:hover:bg-[#363945] rounded-md transition-colors"
            >
              <IoMdAdd className="w-6 h-8" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-0.5 hover:bg-gray-100 dark:hover:bg-[#363945] rounded-md transition-colors"
            >
              <IoClose className="w-6 h-8" />
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
              <MdTab className="w-6 h-16 m-2" />
              <span className="text-sm truncate flex-1">{tab.title}</span>
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
