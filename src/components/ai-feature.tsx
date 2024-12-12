"use client"

import { useState } from "react"
import { AIButton } from "@/components/ai-button"
import { AISidebar } from "@/components/ai-sidebar"

export default function AIFeature() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  return (
    <>
      <AIButton onClick={toggleSidebar} isOpen={isOpen} />
      <AISidebar isOpen={isOpen} onClose={closeSidebar} />
    </>
  )
}

