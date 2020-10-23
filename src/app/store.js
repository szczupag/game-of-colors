import { configureStore } from '@reduxjs/toolkit';
import gameSetupReducer from '../slices/gameSetupSlice';
import gameBoardReducer from '../slices/gameBoardSlice';

export default configureStore({
  reducer: {
    gameSetup: gameSetupReducer,
    gameBoard: gameBoardReducer,
  },
});
