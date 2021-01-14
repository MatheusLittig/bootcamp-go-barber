import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

import signInBackgroudImg from '../../assets/sign-in-background.png'

import { theme } from '../../styles/global'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
`

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    button {
      height: 56px;
      width: 100%;
      padding: 0 16px;

      background: ${theme.colors.primary};
      border-radius: 4px;
      border: 0;

      color: ${theme.colors.text};
      font-weight: 700;

      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, `${theme.colors.primary}`)};
      }
    }

    a {
      color: ${theme.colors.text};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, `${theme.colors.text}`)};
      }

      a {
        color: ${theme.colors.text};
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
          color: ${shade(0.2, `${theme.colors.text}`)};
        }
      }
    }
  }
  > a {
    margin-top: 24px;

    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, `${theme.colors.primary}`)};
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroudImg}) no-repeat center;
  background-size: cover;
`
