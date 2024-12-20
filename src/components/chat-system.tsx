"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from 'lucide-react'
import { url } from "inspector"

export function ChatSystem() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant" | "sent"; content: string }[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const parseURL = () => {
    const path = window.location.pathname
    const segments = path.split('/').filter(segment => segment)
    
    return {
      org: segments[0] || "default",
      grade: segments[1] || "default",
      course: segments[2] || "chat",
      chapter: segments[3] || "general",
      sub_chapter: decodeURIComponent(segments[4] || "conversation")
    }
  }

  const handleSend = async () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { role: "user", content: input }])
      setIsLoading(true)
      const urlParams = parseURL();

      try {
        const response = await fetch('/api/chat-ai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            selectedText: input,
            org: urlParams.org,
            grade: urlParams.grade,
            course: urlParams.course,
            chapter: urlParams.chapter,
            sub_chapter: urlParams.sub_chapter,
            text: input,
            color: "default",
            startOffset: 0,
            endOffset: input.length,
          }),
        })

        if (!response.ok) throw new Error('Failed to get response')

        const reader = response.body?.getReader()
        if (!reader) throw new Error('No reader available')

        let responseText = ''
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          responseText += new TextDecoder().decode(value)
        }

        const jsonResponse = JSON.parse(responseText)
        let fullResponse = ''
        jsonResponse.forEach((chunk: { content: string }) => {
          if (chunk.content) {
            fullResponse += chunk.content
          }
        })

        setMessages(prev => [...prev, { role: "assistant", content: fullResponse }])
      } catch (error) {
        console.error('Error:', error)
        setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I encountered an error processing your request." }])
      } finally {
        setIsLoading(false)
        setInput("")
      }
    }
  }

  return (
    <div className="flex flex-col h-full w-full rounded-md">
      <ScrollArea className="flex-grow w-full mb-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex w-full ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-lg p-4 ${
                  message.role === "user"
                    ? "bg-[#5294e2] text-white"
                    : "bg-[#4b5162] text-[#7c818c]"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start w-full">
              <div className="rounded-lg p-4 w-full bg-white dark:bg-[#404552] text-black dark:text-[#D3DAE3] border border-gray-300 dark:border-[#3B404C]">
                AI is typing...
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleSend()
        }} className="flex items-center space-x-2">
          <div className="flex-grow bg-gray-500 dark:bg-gray-900 rounded-full p-1">
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="bg-transparent border-none focus:ring-0 text-white dark:text-[#D3DAE3]"
            />
          </div>
          <Button 
            type="submit" 
            className="bg-[#5294e2] text-white hover:bg-[#5294e2]/90 rounded-full px-2.5 py-2"
          >
            <Send className="w-5 h-5" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </div>
  )
}

