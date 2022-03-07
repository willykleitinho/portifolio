import { createGlobalStyle } from 'styled-components';

import bgImg from './background.jpg';

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
    --clr-bg-front: #1A1A1D;

    --font-family-1: 'JetBrains Mono', monospace;
    --font-family-2: 'Gugi', cursive;
  }

  html {
    font-size: 16px;
    font-family: var(--font-family-1);
    overflow-x: hidden;
  }

  body {
    color: var(--clr-text-primary);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 0%), 
      url(${bgImg});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    overflow-x: hidden;
  }

  br {
    display: block;
    margin-top: 1rem;
  }
`;

export default GlobalStyle;
