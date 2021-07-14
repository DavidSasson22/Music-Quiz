import styled from "styled-components";
import background from '../assets/img/main-background.jpg'


export const HomePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(${background});
  background-position: center center;
     background-repeat: no-repeat; 
     -webkit-background-size: cover;
     -moz-background-size: cover;
     -o-background-size: cover;
     background-size: cover;
  > header {
    padding: 16px;
    margin-top: 8px;
    margin-bottom: 32px;
    max-width: 84vw;
    background-color: rgb(226,231,235, 0.75);
    border-radius: 30px;
  }

  > form {
    background-color: rgb(226,231,235, 0.75);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 500px;
    padding: 8px;
    margin: 8px;
    font-size: 24px;
  }
    .field {
      display: flex;
      flex-direction: column;
      /* height: 64px; */
      justify-content: space-between;
      > select, input, label {
        padding: 8px;
        font-size: 20px;
      }
    }
    button {
      padding: 8px;
      font-weight: 700;
      background-color: black;
      color: white;
      &:hover {
        cursor: pointer;
      }
    }
`
