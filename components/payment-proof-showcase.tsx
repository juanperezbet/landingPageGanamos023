"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Shield, CheckCircle, Award, Clock, ZoomIn } from "lucide-react"

const paymentProofs = [
  {
    id: 1,
    amount: "$ 300.000,00",
    date: "10 de abril de 2025",
    platform: "Mercado Pago / Ualá",
    image: "/images/proofs/payment-proof-1.png",
    testimonial: "Muy buena la atención ❤️",
  },
  {
    id: 2,
    amount: "$ 200.000,00",
    date: "11 de abril de 2025",
    platform: "Naranja X",
    image: "/images/proofs/payment-proof-2.png",
    testimonial: "Super rapidos y confiables",
  },
  {
    id: 3,
    amount: "$ 420.000,00",
    date: "8 de abril de 2025",
    platform: "Mercado Pago / Naranja x",
    image: "/images/proofs/payment-proof-3.png",
    testimonial: "Una genia",
  },
  {
    id: 4,
    amount: "$ 50.000,00",
    date: "10 de abril de 2025",
    platform: "Ualá",
    image: "/images/proofs/payment-proof-4.png",
    testimonial: "Muy buena la atencion",
  },
  {
    id: 5,
    amount: "$ 167.000,00",
    date: "11 de abril de 2025",
    platform: "Mercado Pago / Uala",
    image: "/images/proofs/payment-proof-5.png",
    testimonial: "Todo super correcto",
  },
  {
    id: 6,
    amount: "ARS 180.000,00",
    date: "14 de abril de 2025",
    platform: "Ualá / Mercado pago",
    image: "/images/proofs/payment-proof-6.png",
    testimonial: "Rapida atencion",
  },
]


export function PaymentProofShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isTouching, setIsTouching] = useState(false)
  const [touchStartX, setTouchStartX] = useState(0)
  const [showZoomModal, setShowZoomModal] = useState(false)
  const [zoomedImage, setZoomedImage] = useState("")

  // Handle autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined
    if (autoplay && !isHovered && !isTouching && !showZoomModal) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % paymentProofs.length)
      }, 4000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoplay, isHovered, isTouching, showZoomModal])

  const nextSlide = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % paymentProofs.length)
  }

  const prevSlide = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? paymentProofs.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setAutoplay(false)
    setCurrentIndex(index)
  }

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true)
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouching) return

    const touchEndX = e.touches[0].clientX
    const diff = touchStartX - touchEndX

    // Swipe threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left
        nextSlide()
      } else {
        // Swipe right
        prevSlide()
      }
      setIsTouching(false)
    }
  }

  const handleTouchEnd = () => {
    setIsTouching(false)
  }

  // Image zoom functionality
  const openZoomModal = (imageSrc: string) => {
    setZoomedImage(imageSrc)
    setShowZoomModal(true)
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  }

  const closeZoomModal = () => {
    setShowZoomModal(false)
    document.body.style.overflow = "" // Restore scrolling
  }

  return (
    <div className="w-full mx-auto px-2 sm:px-4">
      {/* Stats cards - stacked on mobile, side by side on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <div className="rounded-xl bg-black/70 backdrop-blur-md border border-amber-500/30 p-3 shadow-lg shadow-amber-500/20 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center mb-1">
            <Shield className="h-5 w-5 text-amber-500 mr-2" />
            <h3 className="text-lg font-bold text-amber-500">Pagos Garantizados</h3>
          </div>
          <p className="text-sm text-white text-shadow-sm">100% de los premios pagados sin demoras</p>
        </div>

        <div className="rounded-xl bg-black/70 backdrop-blur-md border border-amber-500/30 p-3 shadow-lg shadow-amber-500/20 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center mb-1">
            <Award className="h-5 w-5 text-amber-500 mr-2" />
            <h3 className="text-lg font-bold text-amber-500">Clientes Satisfechos</h3>
          </div>
          <p className="text-sm text-white text-shadow-sm">Miles de jugadores felices y ganadores</p>
        </div>

        <div className="rounded-xl bg-black/70 backdrop-blur-md border border-amber-500/30 p-3 shadow-lg shadow-amber-500/20 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center mb-1">
            <Clock className="h-5 w-5 text-amber-500 mr-2" />
            <h3 className="text-lg font-bold text-amber-500">Retiros Rápidos</h3>
          </div>
          <p className="text-sm text-white text-shadow-sm">Pagos procesados en menos de 30 minutos</p>
        </div>
      </div>

      {/* Main showcase - optimized for touch and desktop */}
      <div
        className="relative overflow-hidden rounded-xl bg-black/70 backdrop-blur-md border border-amber-500/30 shadow-xl shadow-amber-500/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 p-3 text-center">
          <h3 className="text-xl font-bold text-white text-shadow-md">COMPROBANTES DE PAGO VERIFICADOS</h3>
        </div>

        {/* Carousel - responsive for both mobile and desktop */}
        <div className="p-3 sm:p-4">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {paymentProofs.map((proof) => (
                <div key={proof.id} className="min-w-full p-1 sm:p-2">
                  {/* Mobile: stacked layout, Desktop: side-by-side layout */}
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Proof image - larger on desktop */}
                    <div className="w-full md:w-1/2">
                      <div className="relative h-[300px] sm:h-[350px] md:h-[450px] rounded-lg overflow-hidden border-2 border-amber-500/30 shadow-lg group">
                        <Image
                          src={proof.image || "/placeholder.svg"}
                          alt={`Comprobante de pago de ${proof.amount}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                          priority
                        />

                        {/* Zoom button overlay */}
                        <div
                          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer"
                          onClick={() => openZoomModal(proof.image)}
                        >
                          <div className="bg-amber-500 rounded-full p-3">
                            <ZoomIn className="h-6 w-6 text-black" />
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-amber-400 font-bold text-xl">{proof.amount}</p>
                              <p className="text-gray-300 text-xs">{proof.date}</p>
                            </div>
                            <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full border border-amber-500/30">
                              <p className="text-white text-xs">{proof.platform}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mobile-only zoom instruction */}
                      <p className="text-center text-amber-400/80 text-xs mt-1 md:hidden">
                        Toca la imagen para ampliar
                      </p>
                    </div>

                    {/* Testimonial and info */}
                    <div className="w-full md:w-1/2 flex flex-col gap-3 justify-between">
                      {/* Testimonial */}
                      <div className="rounded-xl bg-black/80 backdrop-blur-md border border-amber-500/30 p-3 shadow-lg shadow-amber-500/10">
                        <h3 className="text-lg font-bold text-amber-500 mb-2">Testimonio del Cliente</h3>
                        <div className="relative">
                          <div className="absolute -top-2 -left-2 text-3xl text-amber-500/40">"</div>
                          <p className="text-white text-base italic relative z-10 pl-3">{proof.testimonial}</p>
                          <div className="absolute -bottom-2 -right-2 text-3xl text-amber-500/40">"</div>
                        </div>
                      </div>

                      {/* Trust points */}
                      <div className="rounded-xl bg-black/80 backdrop-blur-md border border-amber-500/30 p-3 shadow-lg shadow-amber-500/10">
                        <h3 className="text-lg font-bold text-amber-500 mb-2">¿Por qué confiar en nosotros?</h3>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-amber-400 mr-2 mt-1 flex-shrink-0" />
                            <p className="text-white text-sm">Pagos verificados y transparentes</p>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-amber-400 mr-2 mt-1 flex-shrink-0" />
                            <p className="text-white text-sm">Atención personalizada 24/7</p>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-amber-400 mr-2 mt-1 flex-shrink-0" />
                            <p className="text-white text-sm">Plataforma segura y confiable</p>
                          </li>
                        </ul>
                      </div>

                      {/* CTA Button - larger touch target */}
                      <div className="flex justify-center mt-1">
                        <a
                          href="https://wa.me/5493416590818?text=Hola%21%20Me%20gustaria%20crear%20un%20usuario%20para%20comenzar%20a%20ganar"
                          className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border-2 border-amber-600 bg-black w-full py-3 text-lg font-bold text-white shadow-[0_0_15px_rgba(255,165,0,0.5)] transform hover:scale-105 transition-all duration-300"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <WhatsappIcon className="h-5 w-5 text-white" />
                            QUIERO GANAR TAMBIÉN
                          </span>
                          <span className="absolute inset-0 z-0 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots - larger for touch */}
          <div className="flex justify-center mt-4 space-x-3">
            {paymentProofs.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-amber-500 w-6" : "bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation buttons - larger for touch */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/70 p-3 text-white transition-all hover:bg-amber-500 hover:text-black border border-amber-500/30 shadow-lg shadow-amber-500/20 touch-manipulation"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/70 p-3 text-white transition-all hover:bg-amber-500 hover:text-black border border-amber-500/30 shadow-lg shadow-amber-500/20 touch-manipulation"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Instructions for users */}
      <div className="text-center mt-3 text-white/70 text-xs">
        <p className="md:hidden">Desliza para ver más comprobantes de pago</p>
        <p className="hidden md:block">Haz clic en la imagen para ampliar el comprobante</p>
      </div>

      {/* Zoom Modal */}
      {showZoomModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={closeZoomModal}>
          <div className="relative w-full max-w-4xl h-[80vh] bg-black rounded-xl overflow-hidden border-2 border-amber-500">
            <div className="absolute top-4 right-4 z-10">
              <button
                className="bg-amber-500 rounded-full p-2 text-black hover:bg-amber-400 transition-colors"
                onClick={closeZoomModal}
                aria-label="Cerrar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="h-full w-full flex items-center justify-center">
              <Image
                src={zoomedImage || "/placeholder.svg"}
                alt="Comprobante de pago ampliado"
                fill
                className="object-contain p-4"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
