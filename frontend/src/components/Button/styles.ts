import { shade } from 'polished'
import styled from 'styled-components'

import { theme } from '../../styles/global'

export const Container = styled.button`
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
`
