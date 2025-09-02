import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Analytics } from '@vercel/analytics/react';
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
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/images/header-ganamos.jpg" as="image" />
        <link rel="preload" href="/images/casino-background.jpg" as="image" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Favicon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Meta tags for social sharing */}
        <meta property="og:title" content="GANAMOS.IO - Tu entretenimiento Online de Confianza" />
        <meta
          property="og:description"
          content="La mejor plataforma de entretenimiento online con los mejores slots y juegos de azar. Crea tu cuenta hoy y comienza a ganar."
        />
        <meta property="og:image" content="/images/header-ganamos.jpg" />

        {/* Performance optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body className={inter.className}>
        {children}
        

        <Analytics />
        </body>
    </html>
  )
}
