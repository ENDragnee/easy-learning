"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { PauseIcon, PlayIcon } from "lucide-react" // Import these icons from lucide-react

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
  const [isPaused, setIsPaused] = useState(true)
  const [hasStarted, setHasStarted] = useState(false) // New state to track if timer
  const clockRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const clockTimer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(clockTimer)
  }, [])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isTimerOn && !isPaused && hasStarted) {
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
  }, [isTimerOn, isPaused, isStudyPeriod, studyDuration, restDuration, onSessionEnd, hasStarted])

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
    const numValue = parseInt(value)
    if (!isPaused && isTimerOn && hasStarted) {
      alert("Please pause the timer before changing the duration!")
      return
    }
    if (!isNaN(numValue) && numValue > 0) {
      setStudyDuration(numValue)
      if (isStudyPeriod) {
        setTimerSeconds(numValue * 60)
      }
    }
  }

  const handleRestDurationChange = (value: string) => {
    const numValue = parseInt(value)
    if (!isPaused && isTimerOn && hasStarted) {
      alert("Please pause the timer before changing the duration!")
      return
    }
    if (!isNaN(numValue) && numValue > 0) {
      setRestDuration(numValue)
      if (!isStudyPeriod) {
        setTimerSeconds(numValue * 60)
      }
    }
  }

  const togglePause = () => {
    if (!hasStarted) {
      setHasStarted(true)
    }
    setIsPaused(!isPaused)
  }

  const handleTimerToggle = (checked: boolean) => {
    setIsTimerOn(checked)
    if (!checked) {
      setIsPaused(true)
      setHasStarted(false)
      setTimerSeconds(studyDuration * 60)
      setIsStudyPeriod(true)
    }
  }

  return (
    <motion.div
      ref={clockRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 cursor-pointer ${
        isExpanded ? 'md:max-w-xl max-w-md' : ''  // Reduced from max-w-3xl to max-w-xl
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
            <div className="flex items-center md:gap-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/10" />
              <div className="font-medium tabular-nums text-lg">
                {formatTime(timerSeconds)}
              </div>
              <div className="md:text-sm text-[12px]">
                {isStudyPeriod ? 'Study' : 'Rest'}
              </div>
              {isTimerOn && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    togglePause()
                  }}
                  className="p-2"
                >
                  {isPaused ? <PlayIcon size={20} className="text-slate-600"/> : <PauseIcon size={20} className="text-slate-600"/>}
                </Button>
              )}
            </div>
            <div className="flex items-center md:gap-4 gap-2">
              <Label htmlFor="studyDuration" className="md:text-sm text-[12px]">Study</Label>
              <Input
                id="studyDuration"
                type="number"
                value={studyDuration}
                onChange={(e) => handleStudyDurationChange(e.target.value)}
                className="md:w-15 w-11 h-8 md:text-sm text-[12px] align-center border-slate-500"
                min={1}
              />
              <Label htmlFor="restDuration" className="md:text-sm text-[12px]">Rest</Label>
              <Input
                id="restDuration"
                type="number"
                value={restDuration}
                onChange={(e) => handleRestDurationChange(e.target.value)}
                className="md:w-15 w-10 h-8 md:text-sm text-[12px] text-center border-slate-500"
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