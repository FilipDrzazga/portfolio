import { createGlobalStyle } from "styled-components";

import latoLight from "../assets/fonts/lato-light-webfont.woff2";
import latoRegular from "../assets/fonts/lato-regular-webfont.woff2";
import latoBold from "../assets/fonts/lato-bold-webfont.woff2";
import playfairRegular from "../assets/fonts/PlayfairDisplay-Regular.woff2";
import playfairMedium from "../assets/fonts/PlayfairDisplay-Medium.woff2";
import playfairBold from "../assets/fonts/PlayfairDisplay-Bold.woff2";

const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
// outline: 1px solid #f00 !important;
};
body {
max-width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};
};
@font-face {
  font-family: 'Lato-Light';
  font-style: light;
  font-weight: 300;
  src: url(${latoLight}) format('woff2');
  };
  @font-face {
    font-family: 'Lato-Regular';
    font-style: regular;
    font-weight: 400;
    src: url(${latoRegular}) format('woff2');
    };
  @font-face {
    font-family: 'Lato-Bold';
    font-style: bold;
    font-weight: 700;
    src: url(${latoBold}) format('woff2');
    };
  @font-face {
    font-family: 'PlayfairDisplay-Regular';
    font-style: regular;
    font-weight: 400;
    src: url(${playfairRegular}) format('woff2');;
    };
  @font-face {
    font-family: 'PlayfairDisplay-Medium';
    font-style: medium;
    font-weight: 500;
    src: url(${playfairMedium}) format('woff2');
    };
  @font-face {
    font-family: 'PlayfairDisplay-Bold';
    font-style: bold;
    font-weight: 700;
    src: url(${playfairBold}) format('woff2');
    };
`;

export default GlobalStyle;
