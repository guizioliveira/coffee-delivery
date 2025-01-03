import styled, { css } from 'styled-components'

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font: ${theme.fonts.roboto.textXSBold};
  `}
`
