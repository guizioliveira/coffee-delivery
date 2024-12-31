import { useEffect } from 'react'

export function useLocalStorage<T>(key: string, state: T) {
  useEffect(() => {
    const stateJSON = JSON.stringify(state)
    localStorage.setItem(key, stateJSON)
  }, [key, state])

  return null
}
