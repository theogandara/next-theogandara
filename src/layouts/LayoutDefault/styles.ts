import styled from 'styled-components'

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: relative;
  background-image: linear-gradient(
    to bottom right,
    #00a3ff,
    #001affde,
    #fa00ff
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const BackgroundBlur = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-image: linear-gradient(to bottom right, #000000c4, #000000bf);
`
export const PinkBuble = styled.div`
  background-color: #fa00ff;
  width: 50vw;
  height: 90vh;
  position: absolute;
`
