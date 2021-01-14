import { shade } from 'polished'
import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

import { theme } from '../../styles/global'

interface ToastProps {
  type?: 'info' | 'success' | 'error'
  hasDescription: boolean
}

export const Container = styled(animated.div)`
  position: absolute;

  right: 0px;
  top: 0px;
  padding: 30px;

  overflow: hidden;
`

const toastTypeVariations = {
  success: css`
    > svg {
      color: ${theme.colors.primary};
    }
  `,
  error: css`
    > svg {
      color: ${theme.colors.error};
    }
  `
}

export const Toast = styled(animated.div)<ToastProps>`
  position: relative;

  width: 360px;
  padding: 16px 30px 16px 16px;

  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  background: ${theme.colors.secondary};

  display: flex;
  align-items: center;

  color: ${theme.colors.text};

  ${props => props.type === 'success' && toastTypeVariations.success}

  ${props => props.type === 'error' && toastTypeVariations.error}

  > svg {
    margin: 0 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;

      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  & + div {
    margin-top: 16px;
  }

  button {
    position: absolute;

    right: 12px;

    opacity: 0.6;
    color: inherit;

    border: 0;
    background: transparent;

    transition: color 0.2s;

    &:focus {
      outline: none;
    }

    &:hover {
      color: ${shade(0.2, `${theme.colors.text}`)};
    }
  }

  ${props =>
    props.hasDescription === true &&
    css`
      button {
        top: 12px;
      }
    `}
`
