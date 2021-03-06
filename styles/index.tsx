import { createGlobalStyle } from 'styled-components';

export const NoScroll = createGlobalStyle`
  body {
    height: 100vh !important;
    min-height: 0 !important;
  }
`;

export const GlobalStyles = createGlobalStyle`
  :root {
    --red: #BF1313;
    --blue: #00A1E4;
    --dark: #272727;
    --gray: #696773;
    --light: #EFF1F3;

    --background: var(--dark);
    --textColor: var(--light);
  }

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: auto;
    min-height: 100vw;

    font-family: 'Cinzel', sans-serif;

    background: var(--background);
    color: var(--textColor);

    transition: background 2s, color 2s;
  }

  #__next {
    width: 100%;
    height: 100%;
  }

  /* Default box-sizing to border-box, except for images and hr */
  *, *:before, *:after {
    box-sizing: border-box;
  }

  hr,img {
    box-sizing: content-box;
  }

  h1, h2, h3 {
    margin: 0 auto;
    line-height: 1;

    color: var(--textColor);
  }

  h1 {
    font-size: 20vmin;
    font-weight: 100;
  }

  h2 {
    font-size: 4rem;

    padding: 2rem 2rem 0;
    text-align: center;
  }

  h3 {
    font-size: 3rem;

    padding: 2rem 2rem 0;
    text-align: center;
  }
`;
