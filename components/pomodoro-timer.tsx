"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, RotateCcw } from "lucide-react"

export function PomodoroTimer() {
  const [mode, setMode] = useState("work")
  const [isActive, setIsActive] = useState(false)
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes in seconds
  const [settings, setSettings] = useState({
    work: 25,
    shortBreak: 5,
    longBreak: 15,
  })

  useEffect(() => {
    let interval = null

    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval)
            setIsActive(false)
            // Switch modes when timer completes
            if (mode === "work") {
              setMode("shortBreak")
              setTimeLeft(settings.shortBreak * 60)
            } else {
              setMode("work")
              setTimeLeft(settings.work * 60)
            }
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    } else if (!isActive && timeLeft !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive, timeLeft, mode, settings])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    if (mode === "work") {
      setTimeLeft(settings.work * 60)
    } else if (mode === "shortBreak") {
      setTimeLeft(settings.shortBreak * 60)
    } else {
      setTimeLeft(settings.longBreak * 60)
    }
  }

  const handleModeChange = (value) => {
    setIsActive(false)
    setMode(value)

    if (value === "work") {
      setTimeLeft(settings.work * 60)
    } else if (value === "shortBreak") {
      setTimeLeft(settings.shortBreak * 60)
    } else {
      setTimeLeft(settings.longBreak * 60)
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <Tabs value={mode} onValueChange={handleModeChange} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="work">Work</TabsTrigger>
          <TabsTrigger value="shortBreak">Short Break</TabsTrigger>
          <TabsTrigger value="longBreak">Long Break</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="text-4xl font-mono font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
        {formatTime(timeLeft)}
      </div>

      <div className="flex space-x-2 mt-2">
        <Button onClick={toggleTimer} variant="outline" size="icon">
          {isActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button onClick={resetTimer} variant="outline" size="icon">
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
