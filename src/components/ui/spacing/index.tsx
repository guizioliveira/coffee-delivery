import { Spacing as SpacingComponent, Size } from './styles'

interface SpacingProps {
  apparence: Size
}

export function Spacing({ apparence }: SpacingProps) {
  return <SpacingComponent size={apparence} />
}
