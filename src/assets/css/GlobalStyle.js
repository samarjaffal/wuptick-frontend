import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Hind Madurai', sans-serif;
    background: #F3F5FF;
    width: 100%;
    height: 100vh;
    margin:0;
    padding: 0;
    box-sizing:border-box;
  }
  #app{
    height: 100vh;
  }
  input, select, textarea, button{
    font-family: 'Hind Madurai', sans-serif; 
  }
`;
