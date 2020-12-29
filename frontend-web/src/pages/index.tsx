import React from 'react'

import { AuthProvider } from '../context/AuthContext'
import SignIn from './signIn'

const Home: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    </>
  )
}

export default Home
