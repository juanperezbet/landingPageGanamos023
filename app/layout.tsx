import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Analytics } from '@vercel/analytics/react'
import { Inter } from "next/font/google"
import Script from "next/script" // 👈 Importamos Script de Next.js

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
        {/* 🔹 Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '740829815451697');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=740829815451697&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

