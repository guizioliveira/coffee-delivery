import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 104px;

  display: flex;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    div {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    @media screen and (max-width: 1200px) {
      width: 100%;
      padding: 0 2rem;
    }
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

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  font-size: 0.875rem;

  svg {
    fill: ${(props) => props.theme.purple};
  }
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
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  ${(props) =>
    props.content !== 0 &&
    `
    &:after {
      content: '${props.content}'; /* Dynamically sets the content based on the prop */

      display: flex;
      justify-content: center;
      align-items: center;

      width: 20px;
      height: 20px;
      border-radius: 50%;

      position: absolute;
      top: -8px;
      right: -8px;

      font-size: 0.75rem;
      font-weight: bold;

      color: white;
      background: ${props.theme['yellow-dark']};
    }
  `}
`
