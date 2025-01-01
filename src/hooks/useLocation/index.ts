import { useState, useEffect, useCallback } from 'react'
import { getLocationByIP, LocationData } from '@/services/get-location'

let cachedLocation: LocationData | null = null
let cachePromise: Promise<LocationData | null> | null = null

export function useLocation() {
  const [location, setLocation] = useState<LocationData | null>(null)
  const [error, setError] = useState<string | null>(null)

  const fetchLocation = useCallback(async () => {
    if (cachedLocation) {
      setLocation(cachedLocation)
      return
    }

    if (cachePromise) {
      try {
        const data = await cachePromise
        setLocation(data)
      } catch {
        setError('Erro ao obter localização')
      }
      return
    }

    setError(null)
    cachePromise = getLocationByIP()

    try {
      const data = await cachePromise
      cachedLocation = data
      setLocation(data)
    } catch {
      setError('Erro ao obter localização')
    } finally {
      cachePromise = null
    }
  }, [])

  useEffect(() => {
    fetchLocation()
  }, [fetchLocation])

  return { location, error }
}
