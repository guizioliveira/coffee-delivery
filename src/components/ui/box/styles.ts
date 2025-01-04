import styled, { css } from 'styled-components'

export const Box = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.base.card};
    border-radius: 6px;

    padding: 2.5rem;

    @media screen and (max-width: ${theme.screen.s}) {
      padding: 2rem;
    }
  `}
`

export const BoxContent = styled.div<{
  orientation?: 'column' | 'row'
}>`
  display: flex;
  flex-direction: ${(props) => props.orientation || 'row'};
  gap: 0.75rem;
`

export const Title = styled.p`
  ${({ theme }) => css`
    font: ${theme.fonts.roboto.textMRegular};
    color: ${theme.colors.base.subtitle};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font: ${theme.fonts.roboto.textSRegular};
    color: ${theme.colors.base.text};
  `}
`

export type IconColors = 'yellow-dark' | 'yellow' | 'purple' | 'gray'

interface IconProps {
  color: IconColors
}

export const Icon = styled.div<IconProps>`
  flex-shrink: none;

  ${({ theme, color }) => css`
    svg {
      color: ${theme.colors[color]};
      width: 22px;
      height: 22px;
    }
  `}
`
