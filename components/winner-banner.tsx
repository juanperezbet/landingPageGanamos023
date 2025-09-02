"use client"

import { useState, useEffect } from "react"
import { Trophy } from "lucide-react"
import { CTAButton } from "@/components/cta-button"

interface WinnerBannerProps {
  whatsappNumber: string
}

export function WinnerBanner({ whatsappNumber }: WinnerBannerProps) {
  const [totalWinnings, setTotalWinnings] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Animate total winnings counter
  useEffect(() => {
    const targetAmount = 5847500 // $5,847,500
    const duration = 3000 // ms
    const interval = 20 // ms
    const steps = duration / interval
    const increment = targetAmount / steps

    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetAmount) {
        current = targetAmount
        clearInterval(timer)
      }
      setTotalWinnings(Math.floor(current))
    }, interval)

    return () => clearInterval(timer)
  }, [])

  // Show banner after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-amber-700 to-amber-600 py-3 px-4 rounded-lg shadow-lg mb-8 animate-fadeIn">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Trophy className="h-8 w-8 text-white" />
          <div>
            <p className="text-white font-bold text-lg">Total pagado a ganadores hoy:</p>
            <p className="text-white text-2xl font-bold">${totalWinnings.toLocaleString("es-AR")}</p>
          </div>
        </div>

        <CTAButton
          text="¡QUIERO GANAR!"
          whatsappNumber={whatsappNumber}
          variant="secondary"
          size="sm"
          showIcon={true}
          pulseEffect={false}
        />
      </div>
    </div>
  )
}
