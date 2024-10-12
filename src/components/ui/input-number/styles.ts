import styled from 'styled-components'

export const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme.base.button};
  color: ${(props) => props.theme.base.title};

  button {
    width: 0.875rem;
    height: 0.875rem;
    border: 0;

    cursor: pointer;

    background: transparent;
    color: ${(props) => props.theme.purple};
  }
`

export const CartAction = styled.div`
  display: flex;
  gap: 0.5rem;
`
