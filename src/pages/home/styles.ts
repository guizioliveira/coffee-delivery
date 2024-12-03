import styled from 'styled-components'

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;

  @media screen and (max-width: 993px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 545px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
