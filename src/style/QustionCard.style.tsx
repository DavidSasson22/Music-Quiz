import styled from "styled-components";


export const Card = styled.div`
  background-color: #3B1C32;
  user-select: none;
  width: 400px;
  height:700px;
  border-radius: 40px;
  padding: 4px;
  > .cardHead {
    padding: 32px;
    color: white;
    text-align: center;
    border-radius: 40px 40px 0 0;
  }
  > .question {
    background-color: #fcc386;
    text-align: center;
    padding: 32px;
    font-size: 1.5rem;
    color: black;
    > p {
      line-height: 1.5;
    }
  }
  > ol {
    background-color: #FFCF9C;
    width: 100%;
    height: 50%;
    padding: 30px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > {
      li {
        font-style: italic;
        width: 100%;
        > button {
          width: 100%;
          padding: 8px;
          display: inline-block;
          border: none;
          padding: 1rem 2rem;
          margin: 0;
          text-decoration: none;
          background: #A4D4B4;
          color: black;
          font-family: sans-serif;
          font-size: 1rem;
          line-height: 1;
          cursor: pointer;
          text-align: center;
          transition: background 250ms ease-in-out, transform 150ms ease;
          -webkit-appearance: none;
          -moz-appearance: none;
        }
        > button:hover {
          background: #0053ba;
          color: white;
        }
      }
    }
  }
  `