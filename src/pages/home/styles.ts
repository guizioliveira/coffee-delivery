import styled, { css } from 'styled-components'

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.screen.l}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: ${theme.screen.m}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: ${theme.screen.s}) {
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`
