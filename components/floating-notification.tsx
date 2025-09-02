"use client"

import { useState, useEffect } from "react"
import { X, DollarSign } from "lucide-react"

interface WinnerNotification {
  name: string
  amount: string
  game: string
  timestamp: number
}

interface FloatingNotificationProps {
  whatsappNumber: string
}

export function FloatingNotification({ whatsappNumber }: FloatingNotificationProps) {
  const [notification, setNotification] = useState<WinnerNotification | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [ctaClicked, setCtaClicked] = useState(false)

  // Check if user has clicked CTA
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasClickedCta = localStorage.getItem("cta_clicked") === "true"
      setCtaClicked(hasClickedCta)
    }
  }, [])

  // Generate random winners
  useEffect(() => {
    // Don't show notifications if user has already clicked CTA
    if (ctaClicked) return

    const names = ["Juan", "María", "Carlos", "Ana", "Pedro", "Laura", "Diego", "Sofía", "Miguel", "Valentina"]
    const games = ["Sweet Bonanza", "Gates of Olympus", "Big Bass", "Wolf Gold", "Fruit Party", "Joker's Jewels"]
    const amounts = ["$5,000", "$8,500", "$12,000", "$7,300", "$15,000", "$6,800", "$10,000"]

    const showRandomNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)]
      const randomGame = games[Math.floor(Math.random() * games.length)]
      const randomAmount = amounts[Math.floor(Math.random() * amounts.length)]

      setNotification({
        name: randomName,
        amount: randomAmount,
        game: randomGame,
        timestamp: Date.now(),
      })

      setIsVisible(true)

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false)

        // Clear notification after animation
        setTimeout(() => {
          setNotification(null)
        }, 500)
      }, 5000)
    }

    // Show first notification after 15 seconds
    const initialTimer = setTimeout(() => {
      showRandomNotification()

      // Then show notifications randomly between 30-60 seconds
      const interval = setInterval(
        () => {
          showRandomNotification()
        },
        Math.random() * 30000 + 30000,
      )

      return () => clearInterval(interval)
    }, 15000)

    return () => clearTimeout(initialTimer)
  }, [ctaClicked])

  if (!notification) return null

  // Calculate time ago
  const getTimeAgo = () => {
    const seconds = Math.floor((Date.now() - notification.timestamp) / 1000)
    if (seconds < 60) return "hace unos segundos"
    return "hace 1 minuto"
  }

  return (
    <div
      className={`fixed bottom-20 right-4 z-40 max-w-xs bg-black/90 backdrop-blur-md border border-amber-500/30 rounded-lg shadow-lg transform transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="p-3">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-1 right-1 text-gray-400 hover:text-white"
          aria-label="Cerrar notificación"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="bg-amber-500 rounded-full p-2 flex-shrink-0">
            <DollarSign className="h-5 w-5 text-black" />
          </div>

          <div className="text-left">
            <p className="text-amber-400 font-bold text-sm">
              ¡{notification.name} acaba de ganar {notification.amount}!
            </p>
            <p className="text-white text-xs">Jugando a {notification.game}</p>
            <p className="text-gray-400 text-xs mt-1">{getTimeAgo()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
