import styled from "styled-components";


export const Card = styled.div`
  background-color: #3B1C32;
  user-select: none;
  width: 350px;
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
    padding: 16px;
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
    padding: 30px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  `
type btnWraperProps = {
  correct: boolean,
  userClicked: boolean,
}


export const BtnWraper = styled.li<btnWraperProps>`
        font-style: italic;
        width: 100%;

        button {
          width: 100%;
          padding: 8px;
          display: inline-block;
          border: none;
          padding: 1rem 2rem;
          margin: 0;
          text-decoration: none;
          background: #A4D4B4;
          background: ${({ correct, userClicked }) =>
    correct
      ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
      : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)'
        : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
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

        button:hover {
          color: white;
        }
  `