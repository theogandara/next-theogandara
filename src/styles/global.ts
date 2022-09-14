import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
    }

    html{
      background-color: #000000;
    }

    body {
        color: ${props => props.theme.colors.text};
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
        background: linear-gradient(90deg, #00a3ff, #001aff, #fa00ff);
        background-size: 200% 200%;
        -webkit-animation: AnimatedBackground 10s ease infinite;
        -moz-animation: AnimatedBackground 10s ease infinite;
        -o-animation: AnimatedBackground 10s ease infinite;
        animation: AnimatedBackground 10s ease infinite;

        @-webkit-keyframes AnimatedBackground {
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
        @-moz-keyframes AnimatedBackground {
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
        @-o-keyframes AnimatedBackground {
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
        @keyframes AnimatedBackground {
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

     ::-webkit-scrollbar {
      width: 2px;
      height: 2px;
    }
    ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #e1e1e1;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #ffffff;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #000000;
    }
    ::-webkit-scrollbar-track {
      background: #000000;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
      background: #666666;
    }
    ::-webkit-scrollbar-track:active {
      background: #333333;
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }

    button{
      cursor: pointer;
    }

    .only-mobile{
      @media (min-width: 1024px) {
       display :none ;
      }
    }
`
