import theme from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    gap: 24px;
    width: 392px;
    height: 48px;
    position: fixed;
    top: 32px;
    right: 40px;
    z-index: 100;
    align-items: center;
  }

  @media (min-width: 1366px) {
    right: 80px;
  }
`
export const Button = styled.button`
  height: 100%;
  width: 200px;
  border-radius: 2px;
  color: ${theme.colors.text};
  background-color: ${theme.colors.black};
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  transition: all 0.6s;
  border: 2px solid ${theme.colors.primary};

  &:hover {
    background-color: ${theme.colors.primary};
  }
`
export const SVG_Case = styled.a`
  height: 24px;
  width: 24px;
  cursor: pointer;
`
