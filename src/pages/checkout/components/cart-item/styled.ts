import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  width: 100%;
  padding: 0.5rem 0.25rem;
`

export const ItemInformation = styled.div`
  display: flex;
  gap: 20px;
`

export const Image = styled.img`
  width: 64px;
  height: 64px;
`

export const Controller = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Price = styled.p`
  ${({ theme }) => css`
    font: ${theme.fonts.roboto.textMBold};

    &::before {
      content: 'R$';
      margin-right: 4px;
    }
  `}
`
