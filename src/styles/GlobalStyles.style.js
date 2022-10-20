import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration:none;
}


a {
    > * {
        width:100%;
    }
}

`

export default GlobalStyle;