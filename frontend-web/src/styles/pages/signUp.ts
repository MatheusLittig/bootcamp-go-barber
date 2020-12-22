import styled from 'styled-components'
import { shade } from 'polished'

import signUpBackgroudImg from '../../assets/sign-up-background.png'

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

      background: ${props => props.theme.colors.primary};
      border-radius: 4px;
      border: 0;

      color: ${props => props.theme.colors.text};
      font-weight: 700;

      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#25D366')};
      }
    }

    a {
      color: ${props => props.theme.colors.text};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#FFFFFF')};
      }
    }
  }
  > a {
    margin-top: 24px;

    color: ${props => props.theme.colors.text};
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#FFFFFF')};
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroudImg}) no-repeat center;
  background-size: cover;
`
