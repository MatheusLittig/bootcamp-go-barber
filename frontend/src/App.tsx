import React from 'react'
import GlobalStyle from './styles/global'
import AppProvider from './hooks'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </Router>
  )
}

export default App