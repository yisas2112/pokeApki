import { createGlobalStyle } from 'styled-components';

// Aquí definís tus estilos globales como si fuera un archivo .css normal
const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family:Helvetica Neue, Helvetica, sans-serif;
    background-color: #f5f5f5;
    color: #1c1e21;
  }

  #root {
    /* Estilos para el div principal de React si es necesario */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3 {
    font-weight: 600;
  }
`;

export default GlobalStyle;