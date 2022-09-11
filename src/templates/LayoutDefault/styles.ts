import styled from 'styled-components'

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: relative;
  opacity: 0.7;
  backdrop-filter: blur(13.5px);
`
export const BackgroundBlur = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10;
  backdrop-filter: unset;
`
export const PinkBuble = styled.div`
  background-color: #fa00ff;
  width: 50vw;
  height: 90vh;
  position: absolute;
  opacity: 0.2;
`
