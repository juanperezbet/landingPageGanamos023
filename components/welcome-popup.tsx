"use client"

import { useState, useEffect } from "react"
import { X, Gift, ArrowRight, Clock } from "lucide-react"
import { WhatsappIcon } from "@/components/whatsapp-icon"
import { CountdownTimer } from "@/components/countdown-timer"

interface WelcomePopupProps {
  whatsappNumber: string
  welcomeBonus: string
}

export function WelcomePopup({ whatsappNumber, welcomeBonus }: WelcomePopupProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [exitIntent, setExitIntent] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [hasSeenPopup, setHasSeenPopup] = useState(false)

  // Check if user has interacted before
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasInteractedBefore = localStorage.getItem("has_interacted") === "true"
      // Forzamos hasSeenPopup a false para que siempre se muestre
      setHasInteracted(hasInteractedBefore)
      setHasSeenPopup(false)
    }
  }, [])

  // Show popup after 3 seconds if user hasn't seen it before
  useEffect(() => {
    if (hasSeenPopup) return

    // Mostrar el popup después de un breve retraso
    const timer = setTimeout(() => {
      setIsOpen(true)
      setHasSeenPopup(true)
      // Comentamos esta línea para que el popup aparezca en cada visita
      // localStorage.setItem("has_seen_popup", "true");
    }, 2000)

    return () => clearTimeout(timer)
  }, [hasSeenPopup])

  // Exit intent detection
  useEffect(() => {
    if (hasInteracted) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntent && !hasInteracted) {
        setExitIntent(true)
        setShowExitPopup(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [exitIntent, hasInteracted])

  const handleClose = () => {
    if (isOpen) {
      setIsOpen(false)
    } else if (showExitPopup) {
      setShowExitPopup(false)
    }
  }

  const handleCTAClick = () => {
    setHasInteracted(true)
    localStorage.setItem("has_interacted", "true")

    if (isOpen) {
      setIsOpen(false)
    } else if (showExitPopup) {
      setShowExitPopup(false)
    }

    // Track conversion
    if (typeof window !== "undefined" && "gtag" in window) {
      // @ts-ignore
      window.gtag("event", "popup_conversion", {
        send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
        event_callback: () => {
          console.log("Popup conversion tracked")
        },
      })
    }
  }

  if (!isOpen && !showExitPopup) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-gradient-to-b from-black to-gray-900 rounded-xl border-2 border-amber-500 shadow-2xl shadow-amber-500/30 overflow-hidden animate-scaleIn">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-10 bg-black/50 rounded-full p-1 text-white hover:text-amber-400 transition-colors"
          aria-label="Cerrar"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Popup content */}
        <div className="p-6 text-center">
          <div className="mb-4 flex justify-center">
            <div className="bg-amber-500 rounded-full p-3 animate-pulse">
              <Gift className="h-8 w-8 text-black" />
            </div>
          </div>

          {isOpen ? (
            <>
              <h2 className="text-2xl font-bold text-amber-500 mb-2">¡BIENVENIDO A GANAMOS.IO!</h2>
              <p className="text-white mb-4">
                Crea tu usuario ahora y recibe un{" "}
                <span className="font-bold text-amber-400">BONO DEL {welcomeBonus}%</span> con tu primer carga.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-amber-500 mb-2">¡ESPERA UN MOMENTO!</h2>
              <p className="text-white mb-4">
                No te vayas sin reclamar tu <span className="font-bold text-amber-400">BONO EXCLUSIVO DEL 50% EN TU PRIMERA RECARGA</span>{" "}
                para nuevos usuarios.
              </p>
            </>
          )}

          <div className="bg-black/40 rounded-lg p-3 mb-4 border border-amber-500/30">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Clock className="h-4 w-4 text-amber-400" />
              <p className="text-amber-400 font-bold">OFERTA POR TIEMPO LIMITADO</p>
            </div>
            <div className="flex justify-center">
              <CountdownTimer compact={true} />
            </div>
          </div>

          <div className="bg-black/40 rounded-lg p-3 mb-4 border border-amber-500/30">
            <ul className="text-left">
              <li className="flex items-start mb-1">
                <span className="text-amber-400 mr-2">✓</span>
                <span className="text-white text-sm">Pagos garantizados en menos de 30 minutos</span>
              </li>
              <li className="flex items-start mb-1">
                <span className="text-amber-400 mr-2">✓</span>
                <span className="text-white text-sm">Más de 2.500 juegos disponibles</span>
              </li>
              <li className="flex items-start mb-1">
                <span className="text-amber-400 mr-2">✓</span>
                <span className="text-white text-sm">Plataforma Verificada</span>
              </li>
                <li className="flex items-start mb-1">
                <span className="text-amber-400 mr-2">✓</span>
                <span className="text-white text-sm">Soporte 24/7 vía WhatsApp</span>
              </li>
            </ul>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg border-2 border-amber-600 bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-3 text-lg font-bold text-black shadow-lg shadow-amber-500/30 transform hover:scale-105 transition-all duration-300"
            onClick={handleCTAClick}
          >
            <span className="relative z-10 flex items-center gap-2">
              {showExitPopup ? "RECLAMAR MI BONO AHORA" : "CREAR MI USUARIO AHORA"}
              <WhatsappIcon className="h-5 w-5 text-black" />
              <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            </span>
          </a>

          <p className="mt-3 text-xs text-gray-400">Al crear tu usuario aceptas nuestros términos y condiciones</p>
        </div>
      </div>
    </div>
  )
}
