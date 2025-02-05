import React from 'react';
import { useSelector } from 'react-redux';
import GameSetup from '../GameSetup';
import {
  isStarted,
} from '../../slices/gameSetupSlice';
import s from './App.module.css';
import GameBoard from '../GameBoard';

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
