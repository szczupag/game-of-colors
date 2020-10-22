import { configureStore } from '@reduxjs/toolkit';
import gameSetupReducer from '../components/GameSetup/gameSetupSlice';
import gameBoardReducer from '../components/GameBoard/gameBoardSlice';

export default configureStore({
  reducer: {
    gameSetup: gameSetupReducer,
    gameBoard: gameBoardReducer,
  },
});
