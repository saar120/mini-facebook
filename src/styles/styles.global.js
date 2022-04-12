import { createGlobalStyle } from "styled-components";
import COLORS from "../constants/colors";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap');

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
