"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  compact?: boolean
}

export function CountdownTimer({ compact = false }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0,
  })
  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    // Check if we already have a stored end time
    const storedEndTime = localStorage.getItem("promoEndTime")
    let endTime: number

    if (storedEndTime) {
      endTime = Number.parseInt(storedEndTime)

      // If the stored time is in the past, reset it
      if (endTime < Date.now()) {
        endTime = Date.now() + 2 * 60 * 60 * 1000
        localStorage.setItem("promoEndTime", endTime.toString())
      }
    } else {
      // Set end time to 2 hours from now
      endTime = Date.now() + 2 * 60 * 60 * 1000
      localStorage.setItem("promoEndTime", endTime.toString())
    }

    const interval = setInterval(() => {
      const now = Date.now()
      const difference = endTime - now

      if (difference <= 0) {
        // Reset timer when it reaches zero
        const newEndTime = Date.now() + 2 * 60 * 60 * 1000
        localStorage.setItem("promoEndTime", newEndTime.toString())
        setTimeLeft({
          hours: 2,
          minutes: 0,
          seconds: 0,
        })
      } else {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({
          hours,
          minutes,
          seconds,
        })

        // Make timer blink when less than 10 minutes left
        if (hours === 0 && minutes < 10) {
          setIsBlinking(true)
        } else {
          setIsBlinking(false)
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (compact) {
    return (
      <div className="flex justify-center gap-1 text-white">
        <div className={`font-mono ${isBlinking ? "animate-pulse text-red-500" : ""}`}>
          {timeLeft.hours.toString().padStart(2, "0")}:{timeLeft.minutes.toString().padStart(2, "0")}:
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
      </div>
    )
  }

  return (
    <div
      className={`bg-black/70 backdrop-blur-md border border-amber-500/30 rounded-lg p-3 mb-6 ${isBlinking ? "animate-pulse" : ""}`}
    >
      <p className="text-center text-white mb-2">La oferta especial termina en:</p>
      <div className="flex justify-center gap-2">
        <div className="bg-gradient-to-b from-amber-600 to-amber-700 rounded px-3 py-2 text-center min-w-[60px] shadow-md">
          <div className="text-white font-bold text-xl font-mono">{timeLeft.hours.toString().padStart(2, "0")}</div>
          <div className="text-white text-xs">Horas</div>
        </div>
        <div className="text-white font-bold text-xl">:</div>
        <div className="bg-gradient-to-b from-amber-600 to-amber-700 rounded px-3 py-2 text-center min-w-[60px] shadow-md">
          <div className="text-white font-bold text-xl font-mono">{timeLeft.minutes.toString().padStart(2, "0")}</div>
          <div className="text-white text-xs">Minutos</div>
        </div>
        <div className="text-white font-bold text-xl">:</div>
        <div className="bg-gradient-to-b from-amber-600 to-amber-700 rounded px-3 py-2 text-center min-w-[60px] shadow-md">
          <div className="text-white font-bold text-xl font-mono">{timeLeft.seconds.toString().padStart(2, "0")}</div>
          <div className="text-white text-xs">Segundos</div>
        </div>
      </div>
    </div>
  )
}
