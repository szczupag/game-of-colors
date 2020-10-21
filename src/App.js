import React from 'react';
import { useSelector } from 'react-redux';
import GameSetup from './components/GameSetup';
import {
  isStarted,
} from './components/GameSetup/gameSetupSlice';

function App() {
  const started = useSelector(isStarted);
  return (
    <div className="App">
      {!started ? <GameSetup /> : <span>Game</span>}
    </div>
  );
}

export default App;
