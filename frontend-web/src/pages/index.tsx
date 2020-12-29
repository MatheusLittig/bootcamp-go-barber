import React from 'react'
import ToastContainer from '../components/ToastContainer'

import { AuthProvider } from '../hooks/AuthContext'
import SignIn from './signIn'

const Home: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
        <ToastContainer />
      </AuthProvider>
    </>
  )
}

export default Home
