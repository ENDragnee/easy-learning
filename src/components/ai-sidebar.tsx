"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChatSystem } from "./chat-system"
import { ResponseTab } from "./response-tab"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface AISidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function AISidebar({ isOpen, onClose }: AISidebarProps) {
  const [activeTab, setActiveTab] = useState("chat")
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight
    }
  }, [activeTab])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            opacity: { duration: 0.2 }
          }}
          className="fixed top-0 right-0 h-full w-full sm:w-96 shadow-lg"
        >
          <Card className="h-full text-gray-900 dark:text-[#7c818c] border-none flex flex-col">
            <div className="bg-gray-500 dark:bg-gray-900 rounded-lg mt-2 mr-1 p-4 shadow-md flex justify-between items-center">
              <div className="flex justify-center">
                <button
                  onClick={() => setActiveTab("chat")}
                  className={`px-6 py-2 text-sm font-medium relative ${
                    activeTab === "chat" 
                      ? "text-blue-200 dark:text-[#5294e2]" 
                      : "text-white dark:text-[#7c818c] hover:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  Chat
                  {activeTab === "chat" && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200 dark:bg-[#5294e2]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("response")}
                  className={`px-6 py-2 text-sm font-medium relative ${
                    activeTab === "response" 
                      ? "text-blue-200 dark:text-[#5294e2]" 
                      : "text-white dark:text-[#7c818c] hover:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  Response
                  {activeTab === "response" && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200 dark:bg-[#5294e2]" />
                  )}
                </button>
              </div>
              <Button 
                variant="ghost" 
                onClick={onClose} 
                className="text-gray-200 dark:text-[#7c818c] hover:text-slate-300 dark:hover:text-white"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <CardContent className="flex-grow overflow-auto mt-2 mr-1 mb-2 rounded-lg p-6 bg-gray-200 dark:bg-[#333a4b]" ref={contentRef}>
              {activeTab === "chat" ? (
                <ChatSystem />
              ) : (
                <ResponseTab />
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}