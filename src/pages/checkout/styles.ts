import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

  @media screen and (max-width: 993px) {
    flex-direction: column;
  }
`

export const Form = styled.form`
  display: flex;
  gap: 2rem;
  width: 100%;

  @media screen and (max-width: 993px) {
    flex-direction: column;
  }
`

interface SectionProps {
  size: number
}

export const Section = styled.div<SectionProps>`
  ${({ size }) => css`
    width: ${size}px;
  `}

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h5 {
    margin-bottom: 3px;
  }

  @media screen and (max-width: 993px) {
    width: 100%;
  }
`
