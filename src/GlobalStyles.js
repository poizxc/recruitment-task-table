import { createGlobalStyle } from 'styled-components'
import { MAIN_FONT_COLOR } from 'Config/Colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Notable&display=swap');
  body {
    font-family: 'Notable', sans-serif;
    font-size:15px;
    color: ${MAIN_FONT_COLOR};
  }
  html {
    box-sizing: border-box;
 }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
 }
`;