import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  bgcolor: "#222831",
  padding: "0 60px",
  mainColor: "#eeeeee",
};

export const GlobalStyled = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}

body{

    font-family: "Noto sans KR" , sans-serif;
    background-color: ${mainStyle.bgcolor};
    letter-spacing: -1px;
}

a{
    text-decoration: none;
}

`;
