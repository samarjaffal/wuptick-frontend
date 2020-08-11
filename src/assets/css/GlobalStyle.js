import { createGlobalStyle } from 'styled-components';
import { Colors } from '../../assets/css/colors';

let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Hind Madurai', sans-serif;
    background: ${Colors.backgroud};
    width: 100%;
    height: 100vh;
    margin:0;
    padding: 0;
    box-sizing:border-box;
  }
  #app{
    height: 100vh;
  }
  input, select, textarea, button, span{
    font-family: 'Hind Madurai', sans-serif; 
  }
  .resize-animation-stopper * {
  animation: none !important;
  transition: none !important;
}
`;
