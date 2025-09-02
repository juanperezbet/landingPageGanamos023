"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { getLocationName } from "@/lib/config"

interface LocationSelectorProps {
  currentLocation: string
}

export function LocationSelector({ currentLocation }: LocationSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const locationName = getLocationName(currentLocation)

  // Cerrar el selector si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".location-selector")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="location-selector relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-500/30 text-white text-sm hover:bg-black/90 transition-colors"
      >
        <MapPin className="h-4 w-4 text-amber-500" />
        <span>{locationName}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-black/90 backdrop-blur-md border border-amber-500/30 rounded-lg shadow-lg p-2 w-48 animate-fadeIn">
          <div className="text-amber-500 text-xs font-bold mb-2 px-2">Seleccionar ubicación:</div>
          <Link
            href="/MDP"
            className={`block px-3 py-2 rounded-md text-sm ${
              currentLocation === "MDP" ? "bg-amber-500/20 text-amber-400" : "text-white hover:bg-black/50"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Mar del Plata
          </Link>
          <Link
            href="/MDQ"
            className={`block px-3 py-2 rounded-md text-sm ${
              currentLocation === "MDQ" ? "bg-amber-500/20 text-amber-400" : "text-white hover:bg-black/50"
            }`}
            onClick={() => setIsOpen(false)}
          >
            MDQ
          </Link>
        </div>
      )}
    </div>
  )
}
