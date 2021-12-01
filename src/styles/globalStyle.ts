import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    overflow: hidden;
  }
  body {
    background-color: black;
  }
  :root {
    --sat: env(safe-area-inset-top);
    --sar: env(safe-area-inset-right);
    --sab: env(safe-area-inset-bottom);
    --sal: env(safe-area-inset-left);
  }
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 32px;
    line-height: 40px;
    color: ${(props) => props.theme.black.high}
  }
  h2 {
    font-size: 20px;
    line-height: 32px;
    color: ${(props) => props.theme.black.high}
  }
  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: ${(props) => props.theme.black.high}
  }
`;

export default GlobalStyle;
