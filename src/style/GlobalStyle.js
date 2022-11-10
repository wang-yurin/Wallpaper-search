import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
body, h1, h2, p, ul, ol, li {
  margin: 0;
  padding: 0;
  font-size: inherit;
  font-weight: inherit;
}
a{
  text-decoration: none;
  color: inherit;
}
ol, ul {
	list-style: none;
}
img {
  vertical-align: top;
  width: 100%;
}
input:focus {
  outline: none;
}
button {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}
`;

export default GlobalStyles;
