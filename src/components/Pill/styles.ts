import styled from 'styled-components'
import theme from '@styles/theme'

export const Container = styled.div`
  display: inline-block;
  width: auto;
  padding: 4px 16px;
  color: ${theme.colors.black};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
  background-color: ${theme.colors.primary};
  letter-spacing: 3px;
  border-radius: 10px;

  @media (min-width: 1024px) {
  }
`
