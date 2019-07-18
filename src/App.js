import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/game';
import Foo from './components/footer';

function App() {
  return(
    <React.Fragment>
    <Game />
    <Foo />
    </React.Fragment>
     
  ); 
}

export default App;
