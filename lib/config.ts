// Configuración centralizada para números de WhatsApp y otros ajustes
// Puedes modificar estos números según necesites para cada ubicación

export const config = {
  // Números de WhatsApp para cada ubicación
  whatsappNumbers: {
    MDP: "5491162817131?text=Hola%21%20Me%20gustaria%20crear%20un%20usuario%20para%20comenzar%20a%20ganar", // Número para Mar del Plata
    MDQ: "5491162805067?text=Hola%21%20Me%20gustaria%20crear%20un%20usuario%20para%20comenzar%20a%20ganar", // Número alternativo para Mar del Plata (ejemplo)
    default: "5491162817131?text=Hola%21%20Me%20gustaria%20crear%20un%20usuario%20para%20comenzar%20a%20ganar", // Número predeterminado
  },

  // Nombres de las ubicaciones
  locationNames: {
    MDP: "Mar del Plata",
    MDQ: "MDQ",
  },

  // Montos de bonos de bienvenida (personalizables por ubicación)
  welcomeBonuses: {
    MDP: "50",
    MDQ: "50",
    default: "50",
  },

  welcomeBonuses2: {
    MDP: "50",
    MDQ: "50",
    default: "50",
  },

  // Mínimos de carga
  minimumDeposits: {
    MDP: "1,000",
    MDQ: "1,000",
    default: "1,000",
  },

  // Minimo de retiro
    minimumRetiro: {
    MDP: "2,000",
    MDQ: "2,000",
    default: "2,000",
  },
}

// Función auxiliar para obtener el número de WhatsApp según la ubicación
export function getWhatsappNumber(location: string): string {
  return config.whatsappNumbers[location as keyof typeof config.whatsappNumbers] || config.whatsappNumbers.default
}

// Función auxiliar para obtener el nombre de la ubicación
export function getLocationName(location: string): string {
  return config.locationNames[location as keyof typeof config.locationNames] || location
}

// Función auxiliar para obtener el monto del bono de bienvenida
export function getWelcomeBonus(location: string): string {
  return config.welcomeBonuses[location as keyof typeof config.welcomeBonuses] || config.welcomeBonuses.default
}

// Función auxiliar para obtener el mínimo de carga
export function getMinimumDeposit(location: string): string {
  return config.minimumDeposits[location as keyof typeof config.minimumDeposits] || config.minimumDeposits.default
}
