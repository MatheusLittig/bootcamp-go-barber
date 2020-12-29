import styled from 'styled-components'

import { theme } from '../global'

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    visibility: hidden;

    padding: 8px;
    width: 160px;

    left: 50%;
    transform: translateX(-50%);

    background: ${theme.colors.primary};
    border-radius: 4px;

    font-size: 14px;
    font-weight: 500;
    color: ${theme.colors.text};

    bottom: calc(100% + 12px);

    opacity: 0;
    transition: opacity 0.4s;

    &::before {
      position: absolute;
      content: '';

      left: 50%;
      transform: translateX(-50%);

      border: solid;
      border-color: ${theme.colors.primary} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`
