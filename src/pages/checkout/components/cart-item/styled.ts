import styled from 'styled-components'

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

  @media screen and (max-width: ${({ theme }) => theme.screen.s}) {
    gap: 12px;
  }
`

export const Image = styled.img`
  width: 64px;
  height: 64px;

  @media screen and (max-width: ${({ theme }) => theme.screen.s}) {
    width: 50px;
    height: 50px;
  }
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
  font: ${({ theme }) => theme.fonts.roboto.textMBold};

  @media screen and (max-width: ${({ theme }) => theme.screen.s}) {
    font: ${({ theme }) => theme.fonts.roboto.textSBold};
  }
`
