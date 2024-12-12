"use client"

import { Button } from "@/components/ui/button"
import { Bot } from 'lucide-react'

interface AIButtonProps {
  onClick: () => void
  isOpen: boolean
}

export function AIButton({ onClick, isOpen }: AIButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      size="icon"
      className={`fixed top-4 right-4 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label={isOpen ? "Close AI Sidebar" : "Open AI Sidebar"}
    >
      <Bot className="h-6 w-6" />
    </Button>
  )
}

