import { Card } from './components/card'
import { Hero } from './components/hero'
import { ContentGrid } from './styles'

export function Home() {
  return (
    <main>
      <Hero />

      <ContentGrid>
        {Array.from({ length: 20 }).map((_, i) => (
          <Card key={i} />
        ))}
      </ContentGrid>
    </main>
  )
}
