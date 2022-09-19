import styled from 'styled-components'
import theme from '@styles/theme'

export const Button = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${theme.colors.primary + '29'};
  transition: all 0.3s;

  &:hover {
    background-color: ${theme.colors.primary + '7A'};
  }
`
