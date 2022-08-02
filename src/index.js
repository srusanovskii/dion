import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Index';
import GlobalStyle from './GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
