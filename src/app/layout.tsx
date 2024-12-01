"use client";

import { ReactNode } from "react";
import { Clock } from "@/components/clock";
import { MainMenu } from "@/components/main-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
// import ContexMenu  from "@/components/context-menu";
import "./globals.css";


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white dark:bg-[#404552] text-black dark:text-white">
        {/* <ContexMenu/> */}
        <ScrollProgressBar />
        <Clock onSessionEnd={() => {}} />
        <header className="fixed top-4 right-4 z-40 flex items-center space-x-2">
          <ThemeToggle />
          <MainMenu />
        </header>
        {children}
        <footer className="border-t border-gray-200 dark:border-[#4b5162] py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <p className="text-sm text-gray-500 dark:text-[#7c818c]">
                © 2024 Educational Platform. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
