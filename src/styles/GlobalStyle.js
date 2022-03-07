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
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 0%), 
      /* url('https://images.pexels.com/photos/8252605/pexels-photo-8252605.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'); */
      url('https://img.freepik.com/free-photo/3d-abstract-wave-pattern-background_53876-104422.jpg?t=st=1646673164~exp=1646673764~hmac=5df6382ef54b2bc9b08fc9269cb04cbb13240fa56cdb081afd12d40f47928ace&w=1380');
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }

  br {
    display: block;
    margin-top: 1rem;
  }
`;

export default GlobalStyle;
