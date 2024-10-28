import styled, { css } from 'styled-components'

export const Box = styled.div`
  background-color: ${(props) => props.theme.colors.base.card};
  border-radius: 6px;
  padding: 2.5rem;
`

export const BoxContent = styled.div<{
  orientation?: 'column' | 'row'
  gap?: number
}>`
  display: flex;
  flex-direction: ${(props) => props.orientation || 'row'};
  gap: ${(props) => (props.gap ? `${props.gap}px` : '1rem')};
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
