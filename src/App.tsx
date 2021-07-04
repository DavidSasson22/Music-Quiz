import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import MainP from './components/Main';
import Home from './components/Home';
import { GlobalStyle } from './style/Main.style'


const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/play" exact component={MainP} />
      </BrowserRouter>
    </>
  )
}


export default App;