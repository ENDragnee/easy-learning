"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChatSystem } from "./chat-system"
import { ResponseTab } from "./response-tab"
import { CloseButton } from "./close-button"
import { cn } from "@/lib/utils"

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
          className={cn(
            "fixed top-0 right-0 h-full w-96",
            "bg-gradient-to-b from-background to-background/95",
            "backdrop-blur-sm border-l border-border/50",
            "shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,0,0,0.3)]",
            "z-40"
          )}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent opacity-50 pointer-events-none" />
          
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="h-full flex flex-col relative"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
              <TabsList className="grid w-48 grid-cols-2 p-1 bg-background/50 backdrop-blur-sm rounded-lg">
                <TabsTrigger 
                  value="chat"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md transition-all"
                >
                  Chat
                </TabsTrigger>
                <TabsTrigger 
                  value="response"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md transition-all"
                >
                  Response
                </TabsTrigger>
              </TabsList>
              
              <CloseButton 
                onClick={onClose}
                className="hover:bg-destructive/10 transition-colors rounded-full p-1"
              />
            </div>

            <div ref={contentRef} className="flex-grow overflow-auto scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent hover:scrollbar-thumb-primary/20">
              <TabsContent 
                value="chat" 
                className="h-full mt-0 p-4"
              >
                <ChatSystem />
              </TabsContent>
              
              <TabsContent 
                value="response" 
                className="h-full mt-0 p-4"
              >
                <ResponseTab />
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      )}
    </AnimatePresence>
  )
}