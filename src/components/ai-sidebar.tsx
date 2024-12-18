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
          className="fixed top-0 right-0 h-full w-full sm:w-96 bg-gray-100 dark:bg-[#363a45] rounded-l-2xl shadow-lg"
        >
          <Card className="h-full bg-transparent text-gray-600 dark:text-[#7c818c] border-0 rounded-l-2xl flex flex-col">
            <div className="bg-white dark:bg-[#31343c] rounded-t-2xl p-4 shadow-md flex justify-between items-center">
              <div className="flex justify-center">
                <button
                  onClick={() => setActiveTab("chat")}
                  className={`px-6 py-2 text-sm font-medium relative ${
                    activeTab === "chat" 
                      ? "text-blue-500 dark:text-[#5294e2]" 
                      : "text-gray-600 dark:text-[#7c818c] hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  Chat
                  {activeTab === "chat" && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 dark:bg-[#5294e2]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("response")}
                  className={`px-6 py-2 text-sm font-medium relative ${
                    activeTab === "response" 
                      ? "text-blue-500 dark:text-[#5294e2]" 
                      : "text-gray-600 dark:text-[#7c818c] hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  Response
                  {activeTab === "response" && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 dark:bg-[#5294e2]" />
                  )}
                </button>
              </div>
              <Button 
                variant="ghost" 
                onClick={onClose} 
                className="text-gray-600 dark:text-[#7c818c] hover:text-gray-900 dark:hover:text-white"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <CardContent className="flex-grow overflow-auto p-6" ref={contentRef}>
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