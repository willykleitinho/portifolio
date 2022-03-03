import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --clr-primary: #FAED26;
    /* --clr-secondary:; */

    --clr-text-primary: #D2E9E3;
    /* --clr-text-secondary:; */

    --clr-bg-back: #1A1A1D;
    --clr-bg-front: #4E4E50;
    
    --font-family-1: 'JetBrains Mono', monospace;
    --font-family-2: 'Gugi', cursive;
  }

  html {
    font-size: 16px;
    font-family: var(--font-family-1);
  }
`;

export default GlobalStyle;