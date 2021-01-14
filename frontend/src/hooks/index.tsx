import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/global'

import { AuthProvider } from './auth'
import { ToastProvider } from './toast'

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <ToastProvider>{children}</ToastProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default AppProvider
