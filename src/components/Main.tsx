import React, { useState } from 'react';
import Loader from './Loader';
import QustionCards from './QustionCards';
import { fetchQuiz, Difficulty, QuestionState } from '../API';
import { Main } from '../style/Main.style'


export type QuizSummary = {
  question: string,
  answer: string,
  correct: boolean,
  rightAns: string
}


const TOTAL_QUESTIONS: number = 10;


export default function MainP() {


  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<QuizSummary[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuiz = await (fetchQuiz(10, Difficulty.EASY));
    setQuestions(newQuiz);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };


  const checkAnswear = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      correct && setScore(prev => prev + 1);
      const ansObj = {
        question: questions[number].question,
        answer,
        correct,
        rightAns: questions[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, ansObj]);
    }
  };


  const getNextQustion = () => {
    const nextQ = number + 1;
    nextQ === TOTAL_QUESTIONS ? setGameOver(true) : setNumber(nextQ);
  };


  const startBtnDisplay = () => {
    if (gameOver || userAnswers.length === TOTAL_QUESTIONS) {
      return <button className="start" onClick={startTrivia}>Start</button>
    } else {
      return null
    };
  };


  const nextBtnDisplay = () => {
    if (!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1) {
      return <button className="next" onClick={getNextQustion}>Next Q</button>
    } else {
      return <button className="next" style={{ visibility: "hidden" }}> Next Q</button >
    }
  }


  return (

    <Main>
      {startBtnDisplay()}
      {!gameOver && <p className="score">Score: {score}</p>}
      {loading && <Loader />}
      {!loading && !gameOver && (
        <QustionCards
          qustion={questions[number].question}
          answers={questions[number].answers}
          callBack={checkAnswear}
          userAnswer={userAnswers && userAnswers[number]}
          qustionNum={number + 1}
          totalQustions={TOTAL_QUESTIONS}
        />
      )}
      {nextBtnDisplay()}
    </Main>

  )
}
