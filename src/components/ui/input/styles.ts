import isPropValid from '@emotion/is-prop-valid'
import styled, { css } from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
interface InputStyleProps {
  hasError?: boolean
}

export const Input = styled('input').withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'hasError',
})<InputStyleProps>`
  ${({ theme, hasError }) => css`
    background-color: ${theme.colors.base.input};
    font: ${theme.fonts.roboto.textSRegular};
    color: ${theme.colors.base.text};

    ${hasError &&
    css`
      outline: 1px solid ${theme.colors.error};
    `}

    ::placeholder {
      color: ${theme.colors.base.label};
    }

    &:focus {
      outline: 1px solid ${theme.colors['yellow-dark']};
    }
  `}

  border: none;
  padding: 0.75rem;
  width: 100%;
  border-radius: 4px;
`

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font: ${theme.fonts.roboto.textXSBold};
  `}
`
