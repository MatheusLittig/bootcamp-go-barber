import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.button`
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
`
