/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

const theme = {
  colors: {
    background: '',
    text: '',
    placeholder: '',
    primary: '',
    secondary: '',
    error: ''
  }
}

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
