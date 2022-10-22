import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
}

body {

    ${({ theme }) => `
       background: ${theme.bg.body};
    color: ${theme.text.dark}`}

}

a {
    > * {
        width:100%;
    }

    text-decoration: none;
}

`;

export default GlobalStyle;
