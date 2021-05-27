import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: #e4e4e4;
  font-family: 'Inter', sans-serif;
}
button{
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #09395A;
  background: transparent;
  color: black;
  transition: all 0.5 ease;
  &:hover{
    background-color: #09395A;
    color: white;
  }
  
  
}
h2{
  font-weight: lighter;
  font-size: 4rem;
  color: black;
}
h3{
  color: black;
}
h4{
  font-weight: bold;
  font-size: 2rem
}
a{
  font-size:1.1rem;
}
span{
  font-weight: bold;
  color: #23d997
}
p{
  padding: 3rem 0rem;
  color: #0f0f0f;
  font-size: 1.4rem;
  line-height: 150%;
}

`;
export default GlobalStyle;