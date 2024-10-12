import { Card } from './components/card'
import { Hero } from './components/hero'

export function Home() {
  return (
    <main>
      <Hero />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2.5rem 2rem',
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </main>
  )
}
