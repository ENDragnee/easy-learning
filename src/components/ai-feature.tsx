"use client"

import { useState } from "react"
import { AIButton } from "@/components/ai-button"
import { AISidebar } from "@/components/ai-sidebar"

interface AIFeatureProps {
  style?: React.CSSProperties;
}

export default function AIFeature({style}: AIFeatureProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div style={style}>
        <AIButton onClick={toggleSidebar} isOpen={isOpen} />
      </div> 
      <AISidebar isOpen={isOpen} onClose={closeSidebar} />
    </>
  )
}

