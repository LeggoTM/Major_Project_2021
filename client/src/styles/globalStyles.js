import { createGlobalStyle } from "styled-components";

import Raleway from "../assets/fonts/Raleway-VariableFont_wght.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Raleway;
        src: url(${Raleway});
    }
    *{
        box-sizing:border-box;
    }
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        color: #FFFFFF;
        font-family: 'Raleway', sans-serif;
        background: linear-gradient(
                    20deg,
                    hsl(192, 100%, 53%),
                    hsl(266, 40%, 64%)
        );
    }
`;
