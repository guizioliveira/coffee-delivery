import styled, { css } from 'styled-components'

export const Item = styled.div<{ value?: number }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font: ${(props) => props.theme.fonts.roboto.textSRegular};
  }

  span {
    ${({ value }) =>
      value === 0 &&
      css`
        color: ${(props) => props.theme.colors.purple};
        font-weight: bold;
      `}
  }
`

export const Total = styled(Item)`
  p,
  span {
    color: ${(props) => props.theme.colors.base.subtitle};
    font: ${(props) => props.theme.fonts.roboto.textLBold};
  }
`
