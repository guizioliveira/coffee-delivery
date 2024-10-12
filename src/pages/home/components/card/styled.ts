import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  width: 256px;
  height: 310px;

  padding: 20px;

  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme.base.card};
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

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  font-size: 0.625rem;
  font-weight: bold;
  text-transform: uppercase;
`

export const CardTitle = styled.h4`
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  color: ${(props) => props.theme.base.subtitle};
`

export const CardLabel = styled.span`
  color: ${(props) => props.theme.base.label};

  font-size: 0.875rem;
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

  background: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.base.card};

  &:hover {
    background: ${(props) => props.theme['purple-dark']};
  }
`

export const Price = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;

  &::before {
    content: 'R$';
    font-size: 0.875rem;
    font-weight: 400;
    font-size: 'Roboto', sans-serif;
    margin-right: 2px;
  }
`
