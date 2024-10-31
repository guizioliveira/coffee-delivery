import styled, { css } from 'styled-components'

export const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.3rem 0.5rem;
  border-radius: 6px;

  ${({ theme }) => css`
    background: ${theme.colors.base.button};
    color: ${theme.colors.base.title};

    button {
      display: flex;
      align-items: center;
      width: 0.875rem;
      height: 0.875rem;
      border: 0;

      cursor: pointer;

      background: transparent;
      color: ${theme.colors.purple};
    }
  `}
`
