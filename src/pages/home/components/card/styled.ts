import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  width: 256px;
  height: 310px;

  padding: 20px;

  border-radius: 6px 36px 6px 36px;

  background: ${(props) => props.theme.colors.base.card};
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardImage = styled.div`
  width: 120px;
  height: 92px;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    top: -43px;
  }
`

export const Tag = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 1000px;

  ${({ theme }) => css`
    background: ${theme.colors['yellow-light']};
    color: ${theme.colors['yellow-dark']};
    font: ${theme.fonts.roboto.tag};
  `}

  text-transform: uppercase;
`

export const CardTitle = styled.h4`
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  color: ${(props) => props.theme.colors.base.subtitle};
`

export const CardLabel = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.base.label};
    font: ${theme.fonts.roboto.textSRegular};
  `}

  text-align: center;
`

export const CardCheckout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 0.25rem;
`

export const StateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 8px;

  cursor: pointer;

  ${({ theme }) => css`
    background: ${theme.colors.purple};
    color: ${theme.colors.base.card};

    &:hover {
      background: ${theme.colors['purple-dark']};
    }
  `}
`

export const Price = styled.p`
  ${({ theme }) => css`
    font: ${theme.fonts.baloo.titleM};

    &::before {
      content: 'R$';
      font: ${theme.fonts.roboto.textSRegular};
      margin-right: 2px;
    }
  `}
`
