import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  input,
  button {
    font: 400 1rem "Roboto", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    margin: 0;
    font-weight: 700;
  }

  button {
    border-style: solid;

    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
`;
