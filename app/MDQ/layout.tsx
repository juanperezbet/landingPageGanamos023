"use client"

import type React from "react"
import { Analytics } from '@vercel/analytics/react';
import { WelcomePopup } from "@/components/welcome-popup"
import { StickyCTA } from "@/components/sticky-cta"
import { config } from "@/lib/config"

// Configuración específica para MDQ
const WHATSAPP_NUMBER = config.whatsappNumbers.MDQ
const WELCOME_BONUS = config.welcomeBonuses.MDQ

export default function MDQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <WelcomePopup whatsappNumber={WHATSAPP_NUMBER} welcomeBonus={WELCOME_BONUS} />
      <Analytics />

      <StickyCTA />
    </>
  )
}
