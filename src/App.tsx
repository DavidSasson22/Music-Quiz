import React, { useState } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import MainP from './components/Main';
import Home from './components/Home';
import { Difficulty } from './API';
import { GlobalStyle } from './style/Main.style'


const App = () => {

  // const [totalQuestions, setTotalQuestions] = useState(0)
  // const [category, setCategory] = useState(0)
  // const [difficulty, setdifficulty] = useState(Difficulty.EASY)

  const [quiz, setQuiz] = useState(
    {totalQuestions : 0,
    category: 10,
    difficulty: Difficulty.EASY});

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/" exact component={() => <Home setQuiz={setQuiz}/>} />
        <Route path="/play" exact component={() => <MainP quiz = {quiz} />} />
      </BrowserRouter>
    </>
  )
}


export default App;
