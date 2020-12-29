import React, { useCallback, useRef } from 'react'
import Head from 'next/head'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import getValidationErrors from '../utils/getValidationErrors'

import logoImg from '../assets/logo_gobarber.svg'

import Input from '../components/Input'
import Button from '../components/Button'

import { Container, Content, Background } from '../styles/pages/signUp'

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 digitos')
      })

      await schema.validate(data, {
        abortEarly: false
      })
    } catch (err) {
      const errors = getValidationErrors(err)

      formRef.current?.setErrors(errors)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Cadastrar</title>
      </Head>

      <main>
        <Container>
          <Background />

          <Content>
            <img src={logoImg} alt="GoBarber" width="275px" />

            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Faça seu cadastro</h1>

              <Input icon={FiUser} name="name" placeholder="Nome" type="text" />
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
            </Form>

            <a href="signUp">
              <FiArrowLeft />
              Voltar para logon
            </a>
          </Content>
        </Container>
      </main>
    </>
  )
}

export default SignUp