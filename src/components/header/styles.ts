import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 104px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  ${({ theme }) => css`
    background: ${theme.colors['purple-light']};
    color: ${theme.colors['purple-dark']};

    font: ${theme.fonts.roboto.textSRegular};

    svg {
      fill: ${theme.colors.purple};
    }
  `}
`

interface CartButtonProps {
  content: number
}

export const CartButton = styled.div<CartButtonProps>`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  ${({ theme }) => css`
    background: ${theme.colors['yellow-light']};
    color: ${theme.colors['yellow-dark']};
  `}

  ${({ theme, content }) =>
    content !== 0 &&
    `
    &:after {
      content: '${content}';

      display: flex;
      justify-content: center;
      align-items: center;

      width: 20px;
      height: 20px;
      border-radius: 50%;

      position: absolute;
      top: -8px;
      right: -8px;

      font: ${theme.fonts.roboto.textXSBold};

      color: ${theme.colors.base.white};
      background: ${theme.colors['yellow-dark']};
    }
  `}
`
