"use client"

import { useState, useEffect } from "react"
import { Shield, Clock, Gamepad2, Users } from "lucide-react"

export function TrustIndicators() {
  const [animateNumbers, setAnimateNumbers] = useState(false)
  const [counts, setCounts] = useState({
    payments: 0,
    games: 0,
    users: 0,
  })

  // Animate numbers when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateNumbers(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("trust-indicators")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Animate counting up
  useEffect(() => {
    if (!animateNumbers) return

    const duration = 2000 // ms
    const interval = 20 // ms
    const steps = duration / interval

    const paymentsIncrement = 100 / steps
    const gamesIncrement = 2500 / steps
    const usersIncrement = 10000 / steps

    const timer = setInterval(() => {
      setCounts((prev) => {
        const newPayments = Math.min(100, prev.payments + paymentsIncrement)
        const newGames = Math.min(2500, prev.games + gamesIncrement)
        const newUsers = Math.min(10000, prev.users + usersIncrement)

        if (newPayments === 100 && newGames === 2500 && newUsers === 10000) {
          clearInterval(timer)
        }

        return {
          payments: newPayments,
          games: newGames,
          users: newUsers,
        }
      })
    }, interval)

    return () => clearInterval(timer)
  }, [animateNumbers])

  return (
    <div id="trust-indicators" className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      <div className="rounded-lg bg-black/70 backdrop-blur-md border border-amber-500/30 p-3 text-center transform hover:scale-105 transition-all duration-300">
        <div className="flex justify-center mb-2">
          <Shield className="h-6 w-6 text-amber-500" />
        </div>
        <div className="text-amber-500 font-bold text-2xl mb-1">{Math.round(counts.payments)}%</div>
        <div className="text-white text-sm">Pagos Garantizados</div>
      </div>

      <div className="rounded-lg bg-black/70 backdrop-blur-md border border-amber-500/30 p-3 text-center transform hover:scale-105 transition-all duration-300">
        <div className="flex justify-center mb-2">
          <Clock className="h-6 w-6 text-amber-500" />
        </div>
        <div className="text-amber-500 font-bold text-2xl mb-1">24/7</div>
        <div className="text-white text-sm">Soporte Inmediato</div>
      </div>

      <div className="rounded-lg bg-black/70 backdrop-blur-md border border-amber-500/30 p-3 text-center transform hover:scale-105 transition-all duration-300">
        <div className="flex justify-center mb-2">
          <Gamepad2 className="h-6 w-6 text-amber-500" />
        </div>
        <div className="text-amber-500 font-bold text-2xl mb-1">+{Math.round(counts.games)}</div>
        <div className="text-white text-sm">Juegos Disponibles</div>
      </div>

      <div className="rounded-lg bg-black/70 backdrop-blur-md border border-amber-500/30 p-3 text-center transform hover:scale-105 transition-all duration-300">
        <div className="flex justify-center mb-2">
          <Users className="h-6 w-6 text-amber-500" />
        </div>
        <div className="text-amber-500 font-bold text-2xl mb-1">+{Math.round(counts.users / 1000)}K</div>
        <div className="text-white text-sm">Usuarios Satisfechos</div>
      </div>
    </div>
  )
}
