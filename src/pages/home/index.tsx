import { useEffect, useState } from 'react'
import { Card } from './components/card'
import { Hero } from './components/hero'
import { ContentGrid } from './styles'
import { Coffee } from '@/types'

export function Home() {
  const [coffees, setCoffees] = useState<Coffee[] | null>(null)

  useEffect(() => {
    fetch('/api/coffees')
      .then((response) => response.json())
      .then((data) => setCoffees(data.coffees))
  }, [])

  return (
    <main>
      <Hero />

      <ContentGrid>
        {coffees &&
          coffees.map((coffee) => <Card key={coffee.id} data={coffee} />)}
      </ContentGrid>
    </main>
  )
}
