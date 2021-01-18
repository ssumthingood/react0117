import { createGlobalStyle } from "styled-components"
import reset from "styled-reset";

const GlobalStyle =createGlobalStyle`
    ${reset};
    
    a {
        text-decoration:none;
        color:inherit;
    }
    *{ 
        font-size:14px;
        box-sizing:border-box;
    }

    body{
        background-color:whitesmoke;
    }
`;

export default GlobalStyle;