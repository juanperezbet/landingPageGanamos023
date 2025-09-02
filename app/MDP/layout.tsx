"use client"

import type React from "react"
import { WelcomePopup } from "@/components/welcome-popup"
import { StickyCTA } from "@/components/sticky-cta"
import { Analytics } from '@vercel/analytics/react';
import { config } from "@/lib/config"

// Configuración específica para MDP
const WHATSAPP_NUMBER = config.whatsappNumbers.MDP
const WELCOME_BONUS = config.welcomeBonuses.MDP

export default function MDPLayout({
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
