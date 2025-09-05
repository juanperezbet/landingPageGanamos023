import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Analytics } from '@vercel/analytics/react'
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GANAMOS.IO - Tu entretenimiento Online de Confianza | Gana Dinero Real",
  description:
    "La mejor plataforma de entretenimiento online con los mejores slots y juegos de azar. Crea tu cuenta hoy, recibe tu bono de bienvenida y comienza a ganar dinero real.",
  keywords:
    "entretenimiento online, slots, juegos de azar, ganamos, apuestas, bono de bienvenida, ganar dinero, pagos verificados",
  generator: 'LuDeLu'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
