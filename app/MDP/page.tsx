import Image from "next/image"
import { Sparkles, ArrowDown, Gift, CheckCircle } from "lucide-react"
import { CTAButton } from "@/components/cta-button"
import { TrustIndicators } from "@/components/trust-indicators"
import { CountdownTimer } from "@/components/countdown-timer"
import { PaymentProofShowcase } from "@/components/payment-proof-showcase"
import { SlotShowcase } from "@/components/slot-showcase"
import { CasinoChips } from "@/components/casino-chips"
import { FloatingNotification } from "@/components/floating-notification"
import { WinnerBanner } from "@/components/winner-banner"
import { LocationSelector } from "@/components/location-selector"
import { config } from "@/lib/config"

// Configuración específica para MDP
const LOCATION = "MDP"
const WHATSAPP_NUMBER = config.whatsappNumbers.MDP
const WELCOME_BONUS = config.welcomeBonuses.MDP
const WELCOME_BONUS2 = config.welcomeBonuses2.MDP
const MINIMUM_DEPOSIT = config.minimumDeposits.MDP
const MINIMUM_RETIRO = config.minimumRetiro.MDP
const LOCATION_NAME = config.locationNames.MDP

export default function MDPPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Main background image - optimized for performance */}
        <div className="h-full w-full bg-[url('/images/casino-background.jpg')] bg-cover bg-center bg-fixed bg-no-repeat"></div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 bg-[url('/images/particles.png')] bg-repeat opacity-20 animate-float"></div>

        {/* Casino chips decoration */}
        <CasinoChips />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-start px-4 py-8 text-center">

        {/* Hero section */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          {/* Logo with glow effect */}
          <div className="mb-6 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 rounded-lg blur-xl opacity-75 animate-pulse"></div>
            <div className="relative">
              <Image
                src="/images/header-ganamos.jpg"
                alt="GANAMOS.BIZ Logo" //MODIFICAR ESTE LOGO
                width={400}
                height={120}
                className="mx-auto rounded-lg z-10 relative border border-amber-500 shadow-2xl shadow-amber-500/30"
                priority
              />
            </div>
          </div>


          {/* Trust indicators */}
          <TrustIndicators />

          {/* Countdown timer */}
          <CountdownTimer />

          {/* Main heading */}
          <h1 className="mb-2 text-4xl font-bold text-white text-shadow-lg">¡GANA DINERO REAL AHORA!</h1>

          {/* Subheading */}
          <p className="mb-4 text-3xl font-medium text-amber-500 text-shadow-md">Crea tu cuenta en segundos</p>

          {/* Bonus highlight */}
          <div className="mb-6 bg-gradient-to-r from-amber-700 to-amber-600 rounded-lg p-3 transform rotate-[-1deg] shadow-lg animate-shimmer">
            <div className="flex items-center justify-center gap-2">
              <Gift className="h-6 w-6 text-white" />
              <p className="text-xl font-bold text-white">
                BONO DE NUEVO USUARIO: <span className="text-2xl">{WELCOME_BONUS}% </span>
              </p>
            </div>{/*
            <div className="flex items-center justify-center gap-2">
              <p className="text-xl font-bold text-white">
                Si es ss a 10.000: <span className="text-2xl">{WELCOME_BONUS2}</span>
              </p>            
            </div> */}
          </div>

          {/* Benefits */}
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-start bg-black/50 backdrop-blur-sm rounded-lg p-2 border border-amber-500/20">
              <CheckCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-white text-left text-sm">Pagos garantizados en menos de 30 minutos</p>
            </div>
            <div className="flex items-start bg-black/50 backdrop-blur-sm rounded-lg p-2 border border-amber-500/20">
              <CheckCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-white text-left text-sm">Más de 2.500 juegos disponibles</p>
            </div>
            <div className="flex items-start bg-black/50 backdrop-blur-sm rounded-lg p-2 border border-amber-500/20">
              <CheckCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-white text-left text-sm">Mínimo de carga: ${MINIMUM_DEPOSIT}</p>
            </div>
            <div className="flex items-start bg-black/50 backdrop-blur-sm rounded-lg p-2 border border-amber-500/20">
              <CheckCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-white text-left text-sm">Mínimo de retiro: ${MINIMUM_RETIRO}</p>
            </div>
            <div className="flex items-start bg-black/50 backdrop-blur-sm rounded-lg p-2 border border-amber-500/20">
              <CheckCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-white text-left text-sm">Plataforma verificada</p>
            </div>
            <div className="flex items-start bg-black/50 backdrop-blur-sm rounded-lg p-2 border border-amber-500/20">
              <CheckCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-white text-left text-sm">Soporte 24/7 vía WhatsApp</p>
            </div>
          </div>

          {/* Main CTA Button */}
          <CTAButton
            text="CREAR MI USUARIO AHORA"
            whatsappNumber={WHATSAPP_NUMBER}
            className="w-full max-w-md mx-auto mb-4"
            tooltip="¡Crea tu usuario ahora y gana!"
            size="lg"
          />

          {/* Scroll indicator */}
          <div className="flex flex-col items-center mt-4 animate-bounce">
            <p className="text-white text-sm mb-1">Ver comprobantes de pago</p>
            <ArrowDown className="h-5 w-5 text-amber-500" />
          </div>
        </div>

        {/* Winner Banner */}
        <WinnerBanner whatsappNumber={WHATSAPP_NUMBER} />

        {/* Payment Proof Showcase */}
        <div className="mb-12 w-full">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
            <h2 className="mx-4 text-3xl font-bold text-amber-500 tracking-wide flex items-center">
              <Sparkles className="h-6 w-6 mr-2 text-amber-400" />
              PAGOS VERIFICADOS
              <Sparkles className="h-6 w-6 ml-2 text-amber-400" />
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
          <PaymentProofShowcase />
        </div>

        {/* Secondary CTA */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="bg-black/70 backdrop-blur-md border-2 border-amber-500 rounded-xl p-5 shadow-xl shadow-amber-500/20 text-center">
            <h3 className="text-2xl font-bold text-amber-500 mb-3">¿LISTO PARA GANAR?</h3>
            <p className="text-white mb-4">Únete a miles de ganadores. ¡Crea tu usuario ahora!</p>
            <CTAButton
              text="COMENZAR A JUGAR"
              whatsappNumber={WHATSAPP_NUMBER}
              className="w-full"
              variant="primary"
              tooltip="¡No pierdas esta oportunidad!"
            />
          </div>
        </div>

        {/* Slot showcase */}
        <div className="mb-12 w-full max-w-4xl">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
            <h2 className="mx-4 text-3xl font-bold text-amber-500 tracking-wide flex items-center">
              <Sparkles className="h-6 w-6 mr-2 text-amber-400" />
              NUESTROS MEJORES SLOTS
              <Sparkles className="h-6 w-6 ml-2 text-amber-400" />
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
          <SlotShowcase />
        </div>

                {/* About section */}
                <div className="mb-12 max-w-3xl rounded-xl bg-black/70 p-8 backdrop-blur-md border border-purple-500/30 shadow-xl shadow-purple-500/20 transform hover:scale-[1.01] transition-all duration-300">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
            <h2 className="mx-4 text-3xl font-bold text-amber-500 tracking-wide">¿QUÉ ES GANAMOS.IO?</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>

          <p className="mb-4 text-lg text-white leading-relaxed">
            <span className="text-amber-400 font-semibold">GANAMOS.IO</span> es tu plataforma premium de entretenimiento online,
            donde encontrarás los mejores slots y juegos de azar con las más altas probabilidades de ganar. Nuestra
            plataforma verificada te garantiza seguridad en cada jugada y pagos inmediatos.
          </p>
          <p className="text-lg text-white leading-relaxed">
            Con más de <span className="text-amber-400 font-semibold">2.500 juegos disponibles</span> de los mejores
            proveedores del mundo, estamos seguros que encontrarás tu juego favorito y podrás disfrutar de la mejor
            experiencia de entretenimiento desde la comodidad de tu hogar.
          </p>
        </div>

        {/* Final CTA */}
        <div className="w-full max-w-lg mx-auto mb-12">
          <div className="bg-gradient-to-r from-amber-700 to-amber-600 rounded-xl p-1">
            <div className="bg-black rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-amber-500 mb-3">¡NO ESPERES MÁS!</h3>
              <p className="text-white mb-4">Crea tu usuario ahora y comienza a ganar dinero real</p>
              <CTAButton
                text="CREAR MI USUARIO"
                whatsappNumber={WHATSAPP_NUMBER}
                className="w-full"
                variant="primary"
                size="lg"
                tooltip="¡Última oportunidad para el bono!"
              />
            </div>
          </div>
        </div>


      </div>

      {/* Floating notification of winners */}
      <FloatingNotification whatsappNumber={WHATSAPP_NUMBER} />
    </main>
  )
}
