import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

  @media screen and (max-width: 993px) {
    flex-direction: column;
  }
`

const baseGridProps = styled.div`
  display: grid;
  gap: 0.75rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr !important;
  }
`

export const GridTwoColumns = styled(baseGridProps)`
  grid-template-columns: 2fr 3fr;
`

export const GridThreeColumns = styled(baseGridProps)`
  grid-template-columns: 4fr 7fr 1fr;
`

interface SectionProps {
  size: number
}

export const Section = styled.div<SectionProps>`
  ${({ size }) => css`
    width: ${size}px;
  `}

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h5 {
    margin-bottom: 3px;
  }

  @media screen and (max-width: 993px) {
    width: 100%;
  }
`
