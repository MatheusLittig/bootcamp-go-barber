import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    background: '#121214',
    text: '#ffffff',
    placeholder: '#666360',
    primary: '#25D366',
    secondary: '#35353b',
    error: '#ea5455'
  }
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px ${theme.colors.secondary} inset !important;
      -webkit-text-fill-color: ${theme.colors.text} !important;
      caret-color: ${theme.colors.text};
    }
  }

  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    font-size: 16px;

    &:focus {
    outline: none;
  }
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`
