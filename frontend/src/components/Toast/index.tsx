import React, { useEffect } from 'react'
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi'
import { ToastMessage, useToast } from '../../hooks/toast'
import { useTransition } from 'react-spring'

import { Container, Toast } from './styles'

interface ToastContainerProps {
  messages: ToastMessage[]
}

const ToastContainer: React.FC<ToastContainerProps> = props => {
  const { messages } = props

  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(String(messages.map(message => message.id)))
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [messages, removeToast])

  const icons = {
    info: <FiInfo size={36} />,
    error: <FiAlertCircle size={36} />,
    success: <FiCheckCircle size={36} />
  }

  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 }
    }
  )

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast
          key={key}
          type={item.type}
          style={props}
          hasDescription={!!item.description}
        >
          {icons[item.type || 'info']}

          <div>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </div>

          <button onClick={() => removeToast(item.id)} type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  )
}

export default ToastContainer
