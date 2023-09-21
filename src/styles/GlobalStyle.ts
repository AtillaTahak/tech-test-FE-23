import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { sizes } from "./sizes";
import { breakpoints } from "./breakpoints";


const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%;
        @media (max-width: ${breakpoints.tablet}) {
            font-size: 56.25%;
        }
        @media (max-width: ${breakpoints.mobile}) {
            font-size: 50%;
        }
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: ${fonts.primary};
        font-size: ${sizes.body};
        line-height: 1.6;
        background-color: ${colors.primary};
        color: ${colors.secondary};
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${fonts.secondary};
        margin: 0;
        font-weight: 700;
    }
    h1 {
        font-size: ${sizes.h1};
    }
    h2 {
        font-size: ${sizes.h2};
    }
    h3 {
        font-size: ${sizes.h3};
    }
    h4 {
        font-size: ${sizes.h4};
    }
    h5 {
        font-size: ${sizes.h5};
    }
    h6 {
        font-size: ${sizes.h6};
    }
    p {
        margin: 0;
    }
    a {
        text-decoration: none;
        color: ${colors.secondary};
        &:hover {
            text-decoration: underline;
        }
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    button {
        font-family: ${fonts.primary};
        font-size: ${sizes.body};
        cursor: pointer;
    }
    input, textarea {
        font-family: ${fonts.primary};
        font-size: ${sizes.body};
    }
`;


export default GlobalStyle;