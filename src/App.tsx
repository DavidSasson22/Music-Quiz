import React, { useState } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import MainP from './components/Main';
import Home from './components/Home';
import { Difficulty } from './API';
import { GlobalStyle } from './style/Main.style'


const App = () => {

  const [totalQuestions, setTotalQuestions] = useState(0)
  const [category, setCategory] = useState(0)
  const [difficulty, setdifficulty] = useState(Difficulty.EASY)

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/" exact component={() => <Home setTotalQuestions={setTotalQuestions} setCategory={setCategory} setdifficulty={setdifficulty} />} />
        <Route path="/play" exact component={() => <MainP totalQuestions={totalQuestions} category={category} difficulty={difficulty} />} />
      </BrowserRouter>
    </>
  )
}


export default App;