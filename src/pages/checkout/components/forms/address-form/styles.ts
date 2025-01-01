import styled from 'styled-components'

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
