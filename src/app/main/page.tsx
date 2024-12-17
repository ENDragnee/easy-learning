"use client"
import { useState } from 'react'
import { NavigationBar } from '@/components/mainPage/NavigationBar'
import { HomePage } from '@/components/mainPage/HomePage'
import { AboutPage } from '@/components/mainPage/AboutPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  return (
    <div className="min-h-screen bg-background font-sans">
      <NavigationBar />
      <div className="pt-16">
        {currentPage === 'Home' && <HomePage />}
        {currentPage === 'About' && <AboutPage />}
      </div>
    </div>
  )
}

