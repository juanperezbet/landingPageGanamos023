"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { WhatsappIcon } from "@/components/whatsapp-icon"

interface CTAButtonProps {
  text: string
  whatsappNumber: string
  className?: string
  variant?: "primary" | "secondary" | "tertiary"
  size?: "sm" | "md" | "lg"
  showIcon?: boolean
  pulseEffect?: boolean
  tooltip?: string
}

export function CTAButton({
  text,
  whatsappNumber,
  className = "",
  variant = "primary",
  size = "md",
  showIcon = true,
  pulseEffect = true,
  tooltip,
}: CTAButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [hasClicked, setHasClicked] = useState(false)
  const buttonRef = useRef<HTMLAnchorElement>(null)

  // Determine if this button is in viewport
  const [isInViewport, setIsInViewport] = useState(false)

  // Check if button is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInViewport(entry.isIntersecting)
        })
      },
      { threshold: 0.5 },
    )

    if (buttonRef.current) {
      observer.observe(buttonRef.current)
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current)
      }
    }
  }, [])

  // Pulse animation effect - only if pulseEffect is true and button is in viewport
  useEffect(() => {
    if (!pulseEffect || !isInViewport || hasClicked) return

    const animationInterval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 3000)

    return () => clearInterval(animationInterval)
  }, [pulseEffect, isInViewport, hasClicked])

  // Show tooltip after 5 seconds if provided and button is in viewport
  useEffect(() => {
    if (!tooltip || !isInViewport || hasClicked) return

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 5000)
    }, 5000)

    return () => clearTimeout(tooltipTimer)
  }, [tooltip, isInViewport, hasClicked])

  // Show tooltip again when user scrolls down
  useEffect(() => {
    if (!tooltip || hasClicked) return

    const handleScroll = () => {
      if (window.scrollY > 300 && !hasScrolled && isInViewport) {
        setHasScrolled(true)
        setShowTooltip(true)
        setTimeout(() => setShowTooltip(false), 5000)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasScrolled, tooltip, isInViewport, hasClicked])

  // Variant styles
  const variantStyles = {
    primary:
      "border-amber-600 bg-gradient-to-r from-amber-600 to-amber-500 text-black shadow-[0_0_20px_rgba(255,165,0,0.7)]",
    secondary: "border-amber-600 bg-black text-white shadow-[0_0_20px_rgba(255,165,0,0.7)]",
    tertiary: "border-purple-500 bg-black text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]",
  }

  // Size styles
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-lg",
    lg: "px-10 py-4 text-xl",
  }

  // Handle click
  const handleClick = () => {
    setHasClicked(true)
    setShowTooltip(false)

    // Vibration for mobile devices
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }

    // Track conversion
    if (typeof window !== "undefined" && "gtag" in window) {
      // @ts-ignore
      window.gtag("event", "conversion", {
        send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
        event_callback: () => {
          console.log("Conversion tracked")
        },
      })
    }

    // Store in localStorage that user has clicked
    localStorage.setItem("cta_clicked", "true")
  }

  // Check if user has clicked before
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasClickedBefore = localStorage.getItem("cta_clicked") === "true"
      setHasClicked(hasClickedBefore)
    }
  }, [])

  return (
    <div className="relative">
      {/* Tooltip */}
      {showTooltip && tooltip && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-lg shadow-lg z-20 animate-bounce whitespace-nowrap">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="font-bold">{tooltip}</span>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
        </div>
      )}

      {/* Pulse effect */}
      {pulseEffect && (
        <div
          className={`absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 blur-xl transition-opacity duration-1000 ${
            isAnimating ? "opacity-70 scale-110" : "opacity-0 scale-100"
          }`}
        ></div>
      )}

      {/* Main button */}
      <a
        ref={buttonRef}
        href={`https://wa.me/${whatsappNumber}`}
        className={`group relative inline-flex items-center justify-center overflow-hidden rounded-lg border-2 ${
          variantStyles[variant]
        } ${sizeStyles[size]} font-bold transform hover:scale-105 transition-all duration-300 z-10 ${className}`}
        onClick={handleClick}
        aria-label={`Contactar por WhatsApp: ${text}`}
      >
        <span className="relative z-10 flex items-center gap-3">
          {text}
          {showIcon && <WhatsappIcon className="h-5 w-5" />}
          <ArrowRight className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" />
        </span>
        <span className="absolute inset-0 z-0 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
      </a>
    </div>
  )
}
