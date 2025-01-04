import styled, { css } from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  min-height: 554px;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.screen.l}) {
      flex-direction: column;
      margin-bottom: 3rem;
    }

    @media screen and (max-width: ${theme.screen.s}) {
      img {
        display: none;
      }
    }
  `}
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.screen.l}) {
      align-items: center;
      text-align: center;
    }

    @media screen and (max-width: ${theme.screen.s}) {
      gap: 2rem;
    }
  `}
`

export const HighlightBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }) => css`
    h1 {
      color: ${theme.colors.base.title};
    }

    p {
      font: ${theme.fonts.roboto.textLRegular};
      color: ${theme.colors.base.subtitle};
    }
  `}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;

  @media screen and (max-width: ${({ theme }) => theme.screen.s}) {
    grid-template-columns: 1fr;
  }
`

export const GridContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-align: left;
`

interface IconProps {
  bgColor: 'yellow-dark' | 'yellow' | 'purple' | 'gray'
  children: React.ReactNode
}

export const Icon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'bgColor',
})<IconProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  ${({ theme, bgColor }) => css`
    background-color: ${theme.colors[bgColor] ?? theme.colors.gray};

    svg {
      fill: ${theme.colors.base.white};
    }
  `}
`
