import React from 'react';
import { useSelector } from 'react-redux';
import GameSetup from './components/GameSetup';
import {
  isStarted,
} from './components/GameSetup/gameSetupSlice';
import s from './App.module.css';
import GameBoard from './components/GameBoard';

function App() {
  const started = useSelector(isStarted);
  return (
    <div className={s.root}>
      <h1 className={s.title}>Game of colors</h1>
      {!started ? <GameSetup /> : <GameBoard />}
    </div>
  );
}

export default App;
