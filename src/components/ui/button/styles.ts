import isPropValid from '@emotion/is-prop-valid'
import styled, { css } from 'styled-components'

interface ButtonProps {
  variant: 'primary' | 'secondary'
}

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.yellow};
    font: ${({ theme }) => theme.fonts.roboto.buttonG};
    color: ${({ theme }) => theme.colors.base.white};
    padding: 12px 8px;

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors['yellow-dark']};
      transition: background-color 0.2s;
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.base.button};
    font: ${({ theme }) => theme.fonts.roboto.buttonM};
    color: ${({ theme }) => theme.colors.base.subtitle};
    padding: 8px;

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.base.hover};
      transition: background-color 0.2s;
    }
  `,
}

export const Button = styled('button').withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'variant',
})<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: none;
  border-radius: 6px;
  width: 100%;
  text-transform: uppercase;
  cursor: pointer;

  ${({ variant = 'primary' }) => variantStyles[variant]}

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
