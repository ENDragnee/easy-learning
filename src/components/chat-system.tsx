"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ChatSystem() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant" | "sent"; content: string }[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { role: "assistant", content: input }])
      setIsLoading(true)

      try {
        const response = await fetch('/api/ai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            selectedText: input,
            grade: "default",
            course: "chat",
            chapter: "general",
            sub_chapter: "conversation",
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
    <div className="flex flex-col h-full bg-gray-100 dark:bg-[#2F343F] text-black dark:text-[#D3DAE3]">
      <ScrollArea className="flex-grow p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                message.role === "user" 
                  ? "bg-blue-500 text-white" 
                  : message.role === "assistant"
                  ? "bg-gray-200 text-black dark:bg-[#404552] dark:text-[#D3DAE3]"
                  : "bg-muted dark:bg-[#3B404C]"
              }`}
            >
              {message.content}
            </span>
          </div>
        ))}
        {isLoading && (
          <div className="text-left mb-4">
            <span className="inline-block p-2 rounded-lg bg-gray-200 text-black dark:bg-[#404552] dark:text-[#D3DAE3] animate-pulse">
              Thinking...
            </span>
          </div>
        )}
      </ScrollArea>
      <div className="p-4 border-t border-gray-300 dark:border-[#3B404C]">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="flex space-x-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="bg-white dark:bg-[#404552] text-black dark:text-[#D3DAE3] border border-gray-300 dark:border-[#3B404C]"
          />
          <Button type="submit" disabled={isLoading} className="bg-blue-500 text-white dark:bg-[#5294E2] dark:text-white">
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}
