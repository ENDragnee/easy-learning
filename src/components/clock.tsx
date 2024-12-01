"use client"

import { useState, useEffect, useRef } from "react"
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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 cursor-pointer ${
        isExpanded ? 'w-full max-w-3xl' : ''
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
            className="bg-zinc-200/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-[40px] p-3 px-6 flex items-center gap-2 shadow-lg"
          >
            <div className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="text-lg font-medium tabular-nums">
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
            className="bg-zinc-200/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-[40px] shadow-lg p-3 px-6 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/10" />
              <div className="font-medium tabular-nums text-lg">
                {formatTime(timerSeconds)}
              </div>
              <div className="text-sm">
                {isStudyPeriod ? 'Study' : 'Rest'}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="studyDuration" className="text-sm">Study</Label>
              <Input
                id="studyDuration"
                type="number"
                value={studyDuration}
                onChange={(e) => handleStudyDurationChange(e.target.value)}
                className="w-20 h-8 text-sm"
                min={1}
              />
              <Label htmlFor="restDuration" className="text-sm">Rest</Label>
              <Input
                id="restDuration"
                type="number"
                value={restDuration}
                onChange={(e) => handleRestDurationChange(e.target.value)}
                className="w-20 h-8 text-sm"
                min={1}
              />
              <Switch
                checked={isTimerOn}
                onCheckedChange={setIsTimerOn}
                className="h-5 w-10"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}