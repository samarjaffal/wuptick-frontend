import { createGlobalStyle } from 'styled-components';
import { Colors } from '../../assets/css/colors';
import { borderRadius, bold, description } from './theme';
import { ShadowSecondary, TransitionSecondary } from './shared-styles';
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

.react-autosuggest__container {
  position: relative;
}

.react-autosuggest__input {
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    border: none;
    background-color: ${Colors.white};
    padding: 20px;
    border-radius: ${borderRadius};
    margin-bottom: 10px;
    ${description};
    :focus {
        outline: none;
        border: 1px solid ${Colors.primary};
        border-radius: ${borderRadius};
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        font-weight: ${bold};
        color: ${Colors.gray};
    }
    :-ms-input-placeholder {
        font-weight: ${bold};
        color: ${Colors.gray};
    }
}

.react-autosuggest__input--focused {
  outline: none;
}

.react-autosuggest__input--open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.react-autosuggest__suggestions-container {
  display: none;
}

.react-autosuggest__suggestions-container--open {
  display: block;
  position: absolute;
  top: 51px;
  width: 100%;
  background-color: #fff;
  ${description};
  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  z-index: 2;
  ${ShadowSecondary};
  max-height: 150px;
    overflow-y: auto;
    overflow-x: hidden;
}

.react-autosuggest__suggestions-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.react-autosuggest__suggestion {
  cursor: pointer;
  padding: 10px 20px;
}

.react-autosuggest__suggestion--highlighted {
  background-color: ${Colors.hover};
  ${TransitionSecondary};
}

@keyframes spin {
    0% {
      transform:rotate(0deg) scale( .75 );
    }
    100% {
      transform:rotate(360deg) scale( 1 );
    } 
}

@keyframes beat {
    0%
  {
    transform: scale( .75 );
    opacity: 0.25;
  }
  20%
  {
    transform: scale( 1 );
    opacity: 0.50;
  }
  40%
  {
    transform: scale( .75 );
    opacity: 0.75;
  }
  60%
  {
    transform: scale( 1 );
    opacity: 1;
  }
}
`;
