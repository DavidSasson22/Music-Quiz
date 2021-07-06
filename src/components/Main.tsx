import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Loader from './Loader';
import QustionCards from './QustionCards';
import { fetchQuiz, Difficulty, QuestionState } from '../API';
import { Main } from '../style/Main.style';
import booksBack from '../assets/img/books.jpg';
import filmBack from '../assets/img/film.jpg';
import musicBack from '../assets/img/music.jpg';
import historyBack from '../assets/img/history.jpg';

export type QuizSummary = {
  question: string,
  answer: string,
  correct: boolean,
  rightAns: string
}


type Props = {
  quiz: {
    totalQuestions: number,
    difficulty: Difficulty,
    category: number,
  }
}


const MainP: React.FC<Props> = ({ quiz }) => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<QuizSummary[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    console.log(quiz.category);
    const newQuiz = await (fetchQuiz(quiz.totalQuestions, quiz.difficulty, quiz.category));
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
      correct && setScore(prev => prev + (Math.round(1 / quiz.totalQuestions * 100)));
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
    nextQ === quiz.totalQuestions ? setGameOver(true) : setNumber(nextQ);
  };


  const startBtnDisplay = () => {
    if (gameOver) {
      let title;
      let bg;
      switch (quiz.category) {
        case 10:
          title = "Books";
          bg = booksBack;
          break;
        case 11:
          title = "Film";
          bg = filmBack;
          break;
        case 12:
          title = "Music";
          bg = musicBack;
          break;
        case 23:
          title = "History";
          bg = historyBack;
          break
      }

      let myStyle = {
        background: `url(${bg})center center/cover`,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }
      return (<div style={myStyle}>
        <button className="start" onClick={startTrivia}>Start {title} quiz</button>
      </div>)
    }
    else if (gameOver || userAnswers.length === quiz.totalQuestions) {
      return (
        <div style={{ display: "flex" }}>
          <button className="start" onClick={startTrivia}>Restart</button>
          <Link to="/"><button className="start">Go Back</button></Link>
        </div>
      )
    } else {
      return null
    };
  };


  const nextBtnDisplay = () => {
    if (!gameOver && !loading && userAnswers.length === number + 1 && number !== quiz.totalQuestions - 1) {
      return <button className="next" onClick={getNextQustion}>Next Q</button>
    } else {
      return <button className="next" style={{ visibility: "hidden" }}> Next Q</button >
    }
  }



  return (
    <Main>
      {!gameOver && <p className="score">Score: {score}</p>}
      {loading && <Loader />}
      {!loading && !gameOver && (
        <QustionCards
          qustion={questions[number].question}
          answers={questions[number].answers}
          callBack={checkAnswear}
          userAnswer={userAnswers && userAnswers[number]}
          qustionNum={number + 1}
          totalQustions={quiz.totalQuestions}
        />
      )}
      {!loading && startBtnDisplay()}
      {nextBtnDisplay()}
    </Main>

  )
}

export default MainP
