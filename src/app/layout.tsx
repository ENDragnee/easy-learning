"use client"

import { ReactNode, useState } from "react"
import { usePathname } from "next/navigation"
import { Clock } from "@/components/clock"
import { Toaster, toast } from "sonner"
import { MainMenu } from "@/components/main-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollProgressBar } from "@/components/scroll-progress-bar"
import ContextMenu2 from "@/components/context-menu"
import { ThemeProvider } from "next-themes"
import "./globals.css"

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number } | null>(null)

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault()
    setMenuPosition({ x: event.clientX, y: event.clientY })
  }

  const handleCloseMenu = () => {
    setMenuPosition(null)
  }

  const handleSessionEnd = (isStudySession: boolean) => {
    const message = isStudySession ? "Time to focus!" : "Time to take a break!"
    const borderColor = isStudySession ? "red" : "green"

    toast(message, {
      duration: 0,
      position: "top-center",
      className: "custom-toast",
      style: {
        borderLeft: `5px solid ${borderColor}`,
        borderRadius: "8px",
        background: "white",
        marginTop: "15px",
        width: "300px",
      },
    })
  }

  // Paths to exclude specific components
  const excludedExtrasPaths = ["/login", "/register", "/landing", "/"]
  const excludedProgressBarPaths = ["/login", "/register", "/landing", "/"]

  const shouldRenderExtras = !excludedExtrasPaths.includes(pathname)
  const shouldRenderProgressBar = !excludedProgressBarPaths.includes(pathname)

  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col bg-white dark:bg-[#404552] text-black dark:text-white"
        onContextMenu={handleContextMenu}
      >
        <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
          <Toaster
            position="top-center"
            expand={false}
            richColors
            closeButton
            className="mt-10"
        />
        <header className="fixed top-4 right-4 z-40 flex items-center space-x-2">
          <ThemeToggle />
        </header>
          <div id="content">
            {children}
          </div>

          {shouldRenderProgressBar && <ScrollProgressBar />}
          {shouldRenderExtras && <Clock onSessionEnd={handleSessionEnd} />}
          <header className="fixed top-4 right-4 z-40 flex items-center space-x-2">
            <ThemeToggle />
            {shouldRenderExtras && <MainMenu />}
          </header>
          <div id="content">
            {children}
          </div>

          {shouldRenderExtras && menuPosition && (
            <ContextMenu2
              x={menuPosition.x}
              y={menuPosition.y}
              onClose={handleCloseMenu}
            />
          )}

          {shouldRenderExtras && (
            <footer className="border-t border-gray-200 dark:border-[#4b5162] py-8">
              <div className="container mx-auto px-4">
                <div className="flex justify-center">
                  <p className="text-sm text-gray-500 dark:text-[#7c818c]">
                    © 2024 Educational Platform. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}
