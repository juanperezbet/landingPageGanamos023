"use client"

import { useState, useEffect } from "react"
import { WhatsappIcon } from "@/components/whatsapp-icon"
import { ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { getWhatsappNumber } from "@/lib/config"

export function StickyCTA() {
  const pathname = usePathname()
  const location = pathname.split("/")[1] || "MDP"
  const whatsappNumber = getWhatsappNumber(location)

  const [isVisible, setIsVisible] = useState(false)
  const [hasScrolledUp, setHasScrolledUp] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hasClicked, setHasClicked] = useState(false)

  // Check if user has clicked before
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasClickedBefore = localStorage.getItem("cta_clicked") === "true"
      setHasClicked(hasClickedBefore)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Detect scroll direction
      if (currentScrollY < lastScrollY) {
        setHasScrolledUp(true)
      } else {
        setHasScrolledUp(false)
      }

      // Show sticky CTA after scrolling down 300px
      if (currentScrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Hide if user has already clicked a CTA
  if (hasClicked) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 p-3 bg-gradient-to-t from-black to-black/80 backdrop-blur-md border-t border-amber-500/30 transform transition-transform duration-300 shadow-lg shadow-black/50 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      } ${hasScrolledUp ? "opacity-100" : "opacity-90"}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden sm:block">
          <p className="text-amber-500 font-bold text-lg">¡CREA TU USUARIO AHORA!</p>
          <p className="text-white text-sm">Y recibe un bono de bienvenida</p>
        </div>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          className="group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-lg border-2 border-amber-600 bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-3 text-lg font-bold text-black shadow-lg shadow-amber-500/30 transform hover:scale-105 transition-all duration-300"
          onClick={() => {
            setHasClicked(true)
            localStorage.setItem("cta_clicked", "true")

            // Track conversion
            if (typeof window !== "undefined" && "gtag" in window) {
              // @ts-ignore
              window.gtag("event", "sticky_conversion", {
                send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
                event_callback: () => {
                  console.log("Sticky conversion tracked")
                },
              })
            }
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <WhatsappIcon className="h-5 w-5 text-black" />
            CREAR USUARIO
            <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
        </a>
      </div>
    </div>
  )
}
