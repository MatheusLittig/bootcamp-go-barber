import styled, { css } from 'styled-components'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
}

export const Container = styled.div<ContainerProps>`
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  background: ${props => props.theme.colors.secondary};
  border-radius: 4px;
  border: 2px solid ${props => props.theme.colors.secondary};

  color: ${props => props.theme.colors.placeholder};

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${props => props.theme.colors.primary};
    `}

  input {
    flex: 1;

    background: transparent;
    border: 0;

    color: ${props => props.theme.colors.text};

    &::placeholder {
      color: ${props => props.theme.colors.placeholder};
    }

    &:focus {
      outline: none;
    }
  }

  svg {
    margin-right: 16px;
  }
`
