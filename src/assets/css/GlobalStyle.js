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
  html{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  body {
    font-family: 'Hind Madurai', sans-serif;
    background: ${Colors.whitePrimary};
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
.w-success {
  background-color: ${Colors.primary};
  border-left: 8px solid darken(#685dc3, 15%);
}

.w-error {
  background-color: ${Colors.red};
  border-left: 8px solid darken(#685dc3, 15%);
}

.w-info {
  background-color: ${Colors.secondary};
  border-left: 8px solid darken(#685dc3, 15%);
}

`;
