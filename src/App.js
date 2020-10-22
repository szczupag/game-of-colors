import React from 'react';
import { useSelector } from 'react-redux';
import GameSetup from './components/GameSetup';
import {
  isStarted,
} from './components/GameSetup/gameSetupSlice';
import s from './App.module.css';

function App() {
  const started = useSelector(isStarted);
  return (
    <div className={s.root}>
      <h1 className={s.title}>Game of colors</h1>
      {!started ? <GameSetup /> : <span>Game</span>}
    </div>
  );
}

export default App;
