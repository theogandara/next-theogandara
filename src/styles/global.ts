import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: ${props => props.theme.colors.text};
        font-family: 'Inter', sans-serif;
    }
`
