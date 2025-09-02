"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slotGames = [
  {
    id: 1,
    name: "Volcano Rising SE",
    provider: "Rubiplay",
    image: "/images/slots/volcano-rising.png",
  },
  {
    id: 2,
    name: "Joker's Jewels Cash",
    provider: "Pragmatic Play",
    image: "/images/slots/jokers-jewels-cash.png",
  },
  {
    id: 3,
    name: "Joker's Jewels",
    provider: "Pragmatic Play",
    image: "/images/slots/jokers-jewels.png",
  },
  {
    id: 4,
    name: "Mad Hit Diamonds",
    provider: "Rubiplay",
    image: "/images/slots/mad-hit-diamonds.png",
  },
  {
    id: 5,
    name: "Blast the Bass",
    provider: "Fishing",
    image: "/images/slots/blast-the-bass.png",
  },
  {
    id: 6,
    name: "Joker's Jewels Wild",
    provider: "Pragmatic Play",
    image: "/images/slots/jokers-jewels-wild.png",
  },
  {
    id: 7,
    name: "Mustang Trail",
    provider: "Pragmatic Play",
    image: "/images/slots/mustang-trail.png",
  },
  {
    id: 8,
    name: "Big Bass Splash",
    provider: "Pragmatic Play",
    image: "/images/slots/big-bass-splash.png",
  },
]

export function SlotShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Number of slots to show at once based on screen size
  const [visibleSlots, setVisibleSlots] = useState(3)

  useEffect(() => {
    // Handle responsive display
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlots(1)
      } else if (window.innerWidth < 1024) {
        setVisibleSlots(2)
      } else {
        setVisibleSlots(3)
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (slotGames.length - visibleSlots + 1))
      }, 3000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoplay, visibleSlots])

  const nextSlide = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (slotGames.length - visibleSlots + 1))
  }

  const prevSlide = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slotGames.length - visibleSlots : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleSlots)}%)` }}
        >
          {slotGames.map((slot) => (
            <div
              key={slot.id}
              className="group relative min-w-[33.333%] flex-shrink-0 cursor-pointer p-3 sm:min-w-[50%] md:min-w-[33.333%]"
              style={{ width: `${100 / visibleSlots}%` }}
            >
              <div className="overflow-hidden rounded-lg shadow-xl shadow-amber-500/20 border border-purple-500/30 transform transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-amber-500/40">
                <div className="relative aspect-[1/1] w-full overflow-hidden rounded-lg bg-black">
                  <Image
                    src={slot.image || "/placeholder.svg"}
                    alt={slot.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 text-left transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-shadow-md">
                      {slot.name}
                    </h3>
                    <p className="text-sm text-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-shadow-sm">
                      {slot.provider}
                    </p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className="rounded-full bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-3 font-bold text-black transition-transform duration-300 hover:scale-105 shadow-lg shadow-amber-500/50 border border-amber-400/50">
                      JUGAR AHORA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/70 p-3 text-white transition-all hover:bg-amber-500 hover:text-black border border-amber-500/30 shadow-lg shadow-amber-500/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/70 p-3 text-white transition-all hover:bg-amber-500 hover:text-black border border-amber-500/30 shadow-lg shadow-amber-500/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
