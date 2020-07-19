import { createGlobalStyle } from 'styled-components';
import { SECONDARY_COLOR } from 'Config/Colors';

export default createGlobalStyle`
  body {
    font-family:sans-serif;
    font-size:15px;
    color: ${SECONDARY_COLOR};
  }

  html {
    box-sizing: border-box;
 }
  *,
  *::before,
  *::after {
    box-sizing:inherit;
 }
`;
