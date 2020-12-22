import React, { ButtonHTMLAttributes } from 'react'

import { Container } from '../styles/components/Button'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = props => {
  const { children, ...rest } = props

  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  )
}

export default Button
