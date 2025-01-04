import styled, { css } from 'styled-components'

export const Item = styled.div<{ value?: number }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font: ${({ theme }) => theme.fonts.roboto.textSRegular};
  }

  span {
    ${({ value, theme }) =>
      value === 0 &&
      css`
        color: ${theme.colors.purple};
        font-weight: bold;
      `}
  }
`

export const Total = styled(Item)`
  ${({ theme }) => css`
    p,
    span {
      color: ${theme.colors.base.subtitle};
      font: ${theme.fonts.roboto.textLBold};
    }
  `}
`
