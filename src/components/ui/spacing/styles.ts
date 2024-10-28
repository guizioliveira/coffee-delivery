import styled from 'styled-components'

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl'

interface SpacingProps {
  size: Size
}

const sizeHeights: { [key in Size]: string } = {
  xs: '0.625rem',
  s: '0.875rem',
  m: '1rem',
  l: '1.5rem',
  xl: '2rem',
}

export const Spacing = styled.div<SpacingProps>`
  width: 100%;
  height: ${({ size }) => sizeHeights[size]};
`
