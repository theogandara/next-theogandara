import styled from 'styled-components'
import theme from '@styles/theme'

interface IButton {
  variant?: 'Down' | 'Up'
}

export const Button = styled.button<IButton>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${props =>
    props.variant === 'Down'
      ? theme.colors.primary + '29'
      : theme.colors.purple + '05'};
  transition: all 0.3s;

  &:hover {
    background-color: ${props =>
      props.variant === 'Down'
        ? theme.colors.primary + '7A'
        : theme.colors.purple + '0D'};
  }
`
