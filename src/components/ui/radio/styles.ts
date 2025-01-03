import styled, { css } from 'styled-components'

export const RadioGroup = styled.div`
  display: flex;
  gap: 0.75rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const RadioHiddenElement = styled.input.attrs({ type: 'radio' })`
  opacity: 0;
  position: absolute;
  left: -9999px;
`

export const RadioContainer = styled.label`
  cursor: pointer;
  position: relative;
  flex: 1;

  input:disabled + span {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${RadioHiddenElement}:checked + span {
    border-color: ${({ theme }) => theme.colors.purple};
    background-color: ${({ theme }) => theme.colors['purple-light']};
  }
`

export const RadioContent = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.base.button};
    border-radius: 6px;
    border: 1px solid transparent;
    font: ${theme.fonts.roboto.buttonM};
    color: ${theme.colors.base.subtitle};

    &:hover {
      background-color: ${theme.colors.base.hover};
    }
  `}

  text-transform: uppercase;

  svg {
    color: ${({ theme }) => theme.colors.purple};
    flex-shrink: 0;
  }
`
