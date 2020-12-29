import Head from 'next/head'
import React, { useCallback, useContext, useRef } from 'react'
import { Form } from '@unform/web'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import logoImg from '../assets/logo_gobarber.svg'

import Input from '../components/Input'
import Button from '../components/Button'

import { Container, Content, Background } from '../styles/pages/signIn'

import { useAuth } from '../hooks/AuthContext'
import getValidationErrors from '../utils/getValidationErrors'

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { signIn } = useAuth()

  interface SignInFormData {
    email: string
    password: string
  }

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Email ou senha inválidos'),
          password: Yup.string().required('Senha obrigatória')
        })

        await schema.validate(data, {
          abortEarly: false
        })

        signIn({
          email: data.email,
          password: data.password
        })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)
        }
      }
    },
    [signIn]
  )

  return (
    <>
      <Head>
        <title>Entrar</title>
      </Head>

      <main>
        <Container>
          <Content>
            <img src={logoImg} alt="GoBarber" width="275px" />

            <Form ref={formRef} onSubmit={handleSubmit}>
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
            </Form>

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
