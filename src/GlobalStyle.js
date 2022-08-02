import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
  }
`;

export default GlobalStyle;
