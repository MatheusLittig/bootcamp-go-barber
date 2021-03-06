import React, { useCallback, useRef } from 'react'
import { Form } from '@unform/web'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import logoImg from '../../assets/logo_gobarber.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, AnimationContainer, Background } from './styles'

import { useAuth } from '../../hooks/auth'
import { useToast } from '../../hooks/toast'
import getValidationErrors from '../../utils/getValidationErrors'
import { Link, useHistory } from 'react-router-dom'

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { signIn } = useAuth()
  const { addToast } = useToast()
  const history = useHistory()

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

        await signIn({
          email: data.email,
          password: data.password
        })

        history.push('/dashboard')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer login, verfique as credenciais.'
        })
      }
    },
    [signIn, addToast, history]
  )

  return (
    <>
      <main>
        <Container>
          <Content>
            <AnimationContainer>
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

              <Link to="/signup">
                <FiLogIn />
                Criar conta
              </Link>
            </AnimationContainer>
          </Content>

          <Background />
        </Container>
      </main>
    </>
  )
}

export default SignIn
