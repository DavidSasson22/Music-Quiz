import React, { useState } from 'react';
import Loader from './components/Loader';
import QustionCards from './components/QustionCards';
import { getNextQustion } from './utlis';
import { fetchQuiz, Difficulty, QuestionState } from './API';


type QuizSummary = {
  question: string,
  answer: string,
  correct: boolean,
  rightAns: string
}


const TOTAL_QUESTIONS: number = 10;


export default function App() {


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
      correct && setScore(prev => prev + 1)
    }
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
      return null
    }
  }


  return (
    <div>
      <h1>react quiz using type script and styled components</h1>
      {startBtnDisplay()}
      {!gameOver && <p className="score">Score</p>}
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
    </div>
  )
}
