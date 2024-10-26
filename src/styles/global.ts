import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    //box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  body {
    ${({ theme }) => css`
      background: ${theme.colors.background};
      color: ${theme.colors.base.text};
    `}
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, p, span, text {
    font: ${(props) => props.theme.fonts.roboto.textMRegular}
  }


  ${({ theme }) => css`
    h1 {
      font: ${theme.fonts.baloo.titleXL};
    }

    h2 {
      font: ${theme.fonts.baloo.titleL};
    }

    h3 {
      font: ${theme.fonts.baloo.titleM};
    }

    h4 {
      font: ${theme.fonts.baloo.titleS};
    }

    h5 {
      font: ${theme.fonts.baloo.titleXS};
    }
  `}
`
