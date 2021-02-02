import { createGlobalStyle } from "styled-components";

// FONT TTF
import Archivo from "./assets/fonts/archivo-regular.ttf";
import PlayfairDisplay from "./assets/fonts/playfairdisplay-regular.ttf";

const GlobalStyles = createGlobalStyle`
/* FONT IMPORT */
@font-face {
  font-family: 'Archivo';
  src: url(${Archivo});
}
@font-face {
  font-family: 'PlayfairDisplay';
  src: url(${PlayfairDisplay});
}

/* GLOBAL STYLES */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Archivo', sans-serif;
  font-size: 1rem;
} 

body {
  background-color: rgba(15, 127, 127, 1);
}
`;

export default GlobalStyles;
