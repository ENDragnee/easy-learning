"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ClockProps {
  onSessionEnd: (isStudySession: boolean) => void;
}

export function Clock({ onSessionEnd }: ClockProps) {
  const [time, setTime] = useState(new Date())
  const [isExpanded, setIsExpanded] = useState(false)
  const [studyDuration, setStudyDuration] = useState(30)
  const [restDuration, setRestDuration] = useState(5)
  const [timerSeconds, setTimerSeconds] = useState(studyDuration * 60)
  const [isStudyPeriod, setIsStudyPeriod] = useState(true)
  const [isTimerOn, setIsTimerOn] = useState(true)
  const clockRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const clockTimer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(clockTimer)
  }, [])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isTimerOn) {
      timer = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev === 0) {
            const nextIsStudyPeriod = !isStudyPeriod
            setIsStudyPeriod(nextIsStudyPeriod)
            onSessionEnd(nextIsStudyPeriod)
            return (nextIsStudyPeriod ? studyDuration : restDuration) * 60
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [isTimerOn, isStudyPeriod, studyDuration, restDuration, onSessionEnd])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (clockRef.current && !clockRef.current.contains(event.target as Node)) {
        setIsExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleStudyDurationChange = (value: string) => {
    const newDuration = parseInt(value, 10)
    if (!isNaN(newDuration) && newDuration > 0) {
      setStudyDuration(newDuration)
      if (isStudyPeriod) {
        setTimerSeconds(newDuration * 60)
      }
    }
  }

  const handleRestDurationChange = (value: string) => {
    const newDuration = parseInt(value, 10)
    if (!isNaN(newDuration) && newDuration > 0) {
      setRestDuration(newDuration)
      if (!isStudyPeriod) {
        setTimerSeconds(newDuration * 60)
      }
    }
  }

  return (
    <motion.div
      ref={clockRef}
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 cursor-pointer ${
        isExpanded ? 'w-full max-w-2xl' : ''
      }`}
      animate={{
        width: isExpanded ? '100%' : 'auto',
        transition: { duration: 0.3 }
      }}
      onClick={() => !isExpanded && setIsExpanded(true)}
    >
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black dark:bg-[#383c4a] text-white dark:text-[#7c818c] rounded-full px-4 py-2"
          >
            <div className="text-base font-bold tabular-nums">
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            exit={{ opacity: 0, width: 0 }}
            className="bg-white dark:bg-[#383c4a] text-black dark:text-white rounded-full shadow-lg p-2 flex items-center justify-between text-sm"
          >
            <div className="flex items-center space-x-2">
              <div className="font-bold tabular-nums">
                {formatTime(timerSeconds)}
              </div>
              <div className="text-xs">
                {isStudyPeriod ? 'Study' : 'Rest'}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="studyDuration" className="sr-only">Study Duration</Label>
              <Input
                id="studyDuration"
                type="number"
                value={studyDuration}
                onChange={(e) => handleStudyDurationChange(e.target.value)}
                className="w-12 h-6 text-xs"
                min={1}
              />
              <Label htmlFor="restDuration" className="sr-only">Rest Duration</Label>
              <Input
                id="restDuration"
                type="number"
                value={restDuration}
                onChange={(e) => handleRestDurationChange(e.target.value)}
                className="w-12 h-6 text-xs"
                min={1}
              />
              <Switch
                checked={isTimerOn}
                onCheckedChange={setIsTimerOn}
                className="h-4 w-8"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

