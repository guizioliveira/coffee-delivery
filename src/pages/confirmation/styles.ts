import styled, { css } from 'styled-components'

export const ConfirmationContaier = styled.div`
  padding-top: 5rem;
  width: 100%;
`
export const SuccessMessage = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  p {
    font: ${({ theme }) => theme.fonts.roboto.textLRegular};
  }
`

export const PurchaseResume = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  width: 562px;
  max-height: 270px;
  border-radius: 6px;
  z-index: 1;

  ${({ theme }) => css`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 6px;
      border-top-right-radius: 36px;
      border-bottom-left-radius: 36px;
      padding: 1px;
      background: linear-gradient(
        to right,
        ${theme.colors.yellow},
        ${theme.colors.purple}
      );
      -webkit-mask:
        linear-gradient(#fafafa 0 0) content-box,
        linear-gradient(#fafafa 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
      z-index: -1;
    }

    @media screen and (max-width: ${theme.screen.l}) {
      width: 100%;
      max-height: inherit;
    }
  `}
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.screen.l}) {
      flex-direction: column;
      width: 100%;

      img {
        display: none;
      }
    }
  `}
`

export const Item = styled.div`
  display: flex;
  gap: 0.75rem;
`

interface IconProps {
  bgColor: 'yellow-dark' | 'yellow' | 'purple' | 'gray'
  children: React.ReactNode
}

export const Icon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'bgColor',
})<IconProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  ${({ theme, bgColor }) => css`
    background-color: ${theme.colors[bgColor] ?? theme.colors.gray};

    svg {
      fill: ${theme.colors.base.white};
    }
  `}
`
