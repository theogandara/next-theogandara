import styled from 'styled-components'

export const Container = styled.div`
  width: 327px;
  height: 100%;
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  align-items: start;
  justify-content: center;

  gap: 16px;

  @media (min-width: 1024px) {
    gap: 24px;
    width: 944px;
  }

  @media (min-width: 1366px) {
    width: 950px;
  }
`
export const ContainerPill = styled.div`
  margin-bottom: 8px;

  @media (min-width: 1024px) {
    margin-bottom: 24px;
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  gap: 68px;
  position: absolute;
  bottom: 24px;
  left: 24px;

  .translate {
    &:hover {
      transition: all 0.4s;
      transform: rotate(360deg);
    }
  }

  @media (min-width: 1024px) {
    bottom: 64px;
    left: 40px;
  }

  @media (min-width: 1366px) {
    bottom: 50%;
    left: 80px;
  }

  button > svg {
    animation: go-up 0.7s infinite alternate-reverse;
  }

  @keyframes go-up {
    0% {
      transform: translateY(8px);
    }
    100% {
      transform: translateY(0);
    }
  }
`
