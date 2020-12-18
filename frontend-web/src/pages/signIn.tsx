import Head from 'next/head'
import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import logoImg from '../assets/logo_gobarber.svg'

import { Container, Content, Background } from '../styles/pages/signIn'

const SignIn: React.FC = () => {
  return (
    <>
      <Head>
        <title>Entrar</title>
      </Head>

      <main>
        <Container>
          <Content>
            <img src={logoImg} alt="GoBarber" width="275px" />

            <form>
              <h1>Faça seu logon</h1>

              <input placeholder="E-mail" type="email" />
              <input placeholder="Senha" type="password" />

              <button type="submit">Entrar</button>

              <a href="forgot">Esqueci minha senha</a>
            </form>

            <a href="signUp">
              <FiLogIn />
              Criar conta
            </a>
          </Content>

          <Background />
        </Container>
      </main>
    </>
  )
}

export default SignIn
