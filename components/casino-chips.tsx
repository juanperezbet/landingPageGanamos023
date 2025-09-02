"use client"

import { useEffect, useState } from "react"

export function CasinoChips() {
  const [chips, setChips] = useState([])

  useEffect(() => {
    // Create random chips
    const newChips = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 30,
      color: getRandomChipColor(),
      rotation: Math.random() * 360,
      animationDuration: Math.random() * 20 + 30,
      delay: Math.random() * 10,
    }))
    setChips(newChips)
  }, [])

  function getRandomChipColor() {
    const colors = [
      "radial-gradient(circle, #e11d48 0%, #9f1239 100%)", // Red
      "radial-gradient(circle, #4f46e5 0%, #3730a3 100%)", // Blue
      "radial-gradient(circle, #16a34a 0%, #166534 100%)", // Green
      "radial-gradient(circle, #f59e0b 0%, #b45309 100%)", // Amber
      "radial-gradient(circle, #7c3aed 0%, #5b21b6 100%)", // Purple
      "radial-gradient(circle, #0ea5e9 0%, #0369a1 100%)", // Sky
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {chips.map((chip) => (
        <div
          key={chip.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${chip.x}%`,
            top: `${chip.y}%`,
            width: `${chip.size}px`,
            height: `${chip.size}px`,
            background: chip.color,
            transform: `rotate(${chip.rotation}deg)`,
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
            border: "2px solid rgba(255, 255, 255, 0.5)",
            animation: `float ${chip.animationDuration}s infinite linear`,
            animationDelay: `${chip.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
