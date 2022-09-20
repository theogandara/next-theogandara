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
export const ContainerButton = styled.div`
  display: flex;
  gap: 68px;
  position: absolute;
  bottom: 24px;
  left: 24px;

  @media (min-width: 1024px) {
    bottom: 64px;
    left: 40px;
  }

  @media (min-width: 1366px) {
    bottom: 50%;
    left: 80px;
  }
`
export const ContainerButtonBack = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;

  @media (min-width: 1024px) {
    bottom: 64px;
    right: 40px;
  }

  @media (min-width: 1366px) {
    bottom: 50%;
    right: 80px;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 1024px) {
    gap: 64px;
  }
`
export const Section = styled.div``
