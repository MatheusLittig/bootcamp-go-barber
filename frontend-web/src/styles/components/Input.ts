import styled, { css } from 'styled-components'
import Tooltip from '../../components/Tooltip'

import { theme } from '../global'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  padding: 16px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${theme.colors.secondary};
  border-radius: 4px;
  border: 2px solid ${theme.colors.secondary};

  color: ${theme.colors.placeholder};

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${theme.colors.error};
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${theme.colors.primary};
    `}


  input {
    width: 100%;

    background: transparent;
    border: 0;

    color: ${theme.colors.text};

    &::placeholder {
      color: ${theme.colors.placeholder};
    }

    &:focus {
      outline: none;
    }
  }
`
export const IconInput = styled.div`
  margin-right: 16px;
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    color: ${theme.colors.error};
    margin: 0;
  }

  span {
    background: ${theme.colors.error};
    color: ${theme.colors.text};

    &::before {
      border-color: ${theme.colors.error} transparent;
    }
  }
`
