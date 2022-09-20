import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
    }

    html{
      scroll-behavior: smooth;
      }

    body {
        color: ${props => props.theme.colors.text};
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;

        background-color: ${theme.colors.black};


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
    }}
`
