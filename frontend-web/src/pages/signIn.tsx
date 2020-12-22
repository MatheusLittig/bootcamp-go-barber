import Head from 'next/head'
import React from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import logoImg from '../assets/logo_gobarber.svg'

import Input from '../components/Input'
import Button from '../components/Button'

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

              <Input
                icon={FiMail}
                name="email"
                placeholder="E-mail"
                type="email"
              />
              <Input
                icon={FiLock}
                name="password"
                placeholder="Senha"
                type="password"
              />

              <Button type="submit">Entrar</Button>

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
