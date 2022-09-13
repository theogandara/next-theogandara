import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  align-items: start;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 944px;
  }

  @media (min-width: 1366px) {
    width: 950px;
  }
`
