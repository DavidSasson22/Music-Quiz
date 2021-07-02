import React, { useState } from 'react';
import Loader from './components/Loader';
import QustionCards from './components/QustionCards';
import { startTrivia, getNextQustion, checkAnswear } from './utlis';
import { fetchQuiz, Difficulty } from './API';


const TOTAL_QUESTIONS: number = 10;

export default function App() {

  console.log(fetchQuiz(10, Difficulty.EASY));


  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  return (
    <div>
      <h1>react quiz using type script and styled components</h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className="score">Score</p>
      <Loader />
      {/* <QustionCards
        qustion={questions[number].qustion}
        answers={questions[number].answers}
        callBack={checkAnswear}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        qustionNum={number + 1}
        totalQustions={TOTAL_QUESTIONS}
      /> */}
      <button className="next" onClick={getNextQustion}>Next Q</button>
    </div>
  )
}
