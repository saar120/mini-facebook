import { createGlobalStyle } from "styled-components";
import COLORS from "../constants/colors";

const GlobalStyles = createGlobalStyle`


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${COLORS.GREY};
    font-family: 'PT Sans Narrow', sans-serif;
  }

  `;

export default GlobalStyles;
