import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 100%;
  padding: 4rem 0;

  font: ${({ theme }) => theme.fonts.baloo.titleS};

  button {
    width: auto;
  }
`
