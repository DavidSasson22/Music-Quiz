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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .score {
    font-size: 2rem;
    line-height: 2;
  }
  .start, .next {
    width: 200px;
    height: 60px;
    border-radius: 60px;
    font-size: large;
    background-color: #293540;
    border: 0px;
    box-shadow: 0;
    color: white;
    margin: 16px;

    &:hover {
      cursor: pointer;
    }
  }
`;
