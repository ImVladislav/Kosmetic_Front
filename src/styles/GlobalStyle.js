import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
html,
body {
height: 100%;
  font-family: 'Mulish', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #504056;
  scroll-behavior: smooth;

}
#root{
min-height: 100%;
display: flex;
flex-direction: column;
}

body.modal-open {
  overflow: hidden;
}



code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

*,
::after,
::before {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  
}
button{
  cursor: pointer;
}

a,
button,
input {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.hidden {
  opacity: 0;
  overflow: hidden;
  height: 0;
  width: 0;
  padding: 0;
  margin: 0;
  line-height: 0;
}

.Pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  outline: transparent;
  gap: 10px;
  margin-top: 20px;

  & > li {
    width: 40px;
    height: 40px;
  }

  & > li > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #fff;
    color: #000;
    border: 1px solid #ccc;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
     background: #ccc;
    }}
    

    & > &__active > a { 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #ff69b4;
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    cursor: pointer;
    &:hover,
    &:focus {
     background: #ff69b4;
     cursor: default;
    } 
    }
    & > .disabled > a {
    opacity: 0.5;
    cursor: default;
     &:hover,
    &:focus {
     background: #fff;
   
    }
  }
  
  
}


.WrapListProduct {
  transition: transform 0.5s linear;
}


.WrapListProduct.active {
  transform: translateY(-100%);
}
`;
