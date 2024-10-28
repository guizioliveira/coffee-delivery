import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.base.input};
    font: ${theme.fonts.roboto.textSRegular};
    color: ${theme.colors.base.text};

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
