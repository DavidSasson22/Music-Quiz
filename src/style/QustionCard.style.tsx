import styled from "styled-components";


export const Card = styled.div`
  background-color: #bee1e6;
  user-select: none;
  width: 350px;
  min-height:500px;
  border-radius: 40px;
  padding: 8px 16px 24px 16px;
  > .cardHead {
    padding: 32px;
    text-align: center;
    border-radius: 40px 40px 0 0;
  }
  > .question {
    background-color: #e2ece9;
    text-align: center;
    padding: 16px;
    font-size: 1.5rem;
    color: black;
    > p {
      line-height: 1.5;
    }
  }
  > ol {
    background-color: #e2ece9;
    width: 100%;
    min-height: 280px;
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
      ? '#caffbf'
      : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)'
        : '#636dfe7fd159'};
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
