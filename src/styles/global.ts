import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
    }

    body {
        color: ${props => props.theme.colors.text};
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
        background: linear-gradient(90deg, #00a3ff, #001aff, #fa00ff);
        background-size: 200% 200%;
        -webkit-animation: AnimationName 8s ease infinite;
        -moz-animation: AnimationName 8s ease infinite;
        -o-animation: AnimationName 8s ease infinite;
        animation: AnimationName 8s ease infinite;

        @-webkit-keyframes AnimationName {
          0% {
            background-position: 0% 55%;
          }
          50% {
            background-position: 100% 46%;
          }
          100% {
            background-position: 0% 55%;
          }
        }
        @-moz-keyframes AnimationName {
          0% {
            background-position: 0% 55%;
          }
          50% {
            background-position: 100% 46%;
          }
          100% {
            background-position: 0% 55%;
          }
        }
        @-o-keyframes AnimationName {
          0% {
            background-position: 0% 55%;
          }
          50% {
            background-position: 100% 46%;
          }
          100% {
            background-position: 0% 55%;
          }
        }
        @keyframes AnimationName {
          0% {
            background-position: 0% 55%;
          }
          50% {
            background-position: 100% 46%;
          }
          100% {
            background-position: 0% 55%;
          }
        }
    }

    button{
      cursor: pointer;
    }
`
