import { useState, useEffect } from 'react'
import { getLocationByIP, LocationData } from '@/services/get-location'

export function useLocation() {
  const [location, setLocation] = useState<LocationData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchLocation() {
      setError(null)
      try {
        const locationData = await getLocationByIP()
        if (locationData) {
          setLocation(locationData)
        } else {
          setError('Não foi possível obter a localização.')
        }
      } catch (err) {
        setError('Erro ao buscar a localização.')
      }
    }

    fetchLocation()
  }, [])

  return { location, error }
}
