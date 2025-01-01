export interface LocationData {
  city: string
  state: string
}

export async function getLocationByIP(): Promise<LocationData | null> {
  try {
    const response = await fetch('https://ipapi.co/json/')
    if (!response.ok) {
      throw new Error('Failed to fetch location')
    }
    const data = await response.json()

    return {
      city: data.city,
      state: data.region_code,
    }
  } catch (error) {
    console.error('Erro ao obter localização por IP:', error)
    return null
  }
}
