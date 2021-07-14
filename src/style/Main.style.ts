import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Times New Roman';    
  }

 
  h1 {
    text-transform: uppercase;
    line-height: 2;
  }
`;

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #293540;
  > .score {
    font-size: 2rem;
    line-height: 2;
    color: white;
  }
  .start,
  .next {
    width: 200px;
    height: 60px;
    border-radius: 60px;
    font-size: large;
    background-color: white;
    border: 0px;
    box-shadow: 0;
    color: #293540;
    margin-top: 8px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const BtnFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
