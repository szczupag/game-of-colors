import { configureStore } from '@reduxjs/toolkit';
import gameSetupReducer from '../components/GameSetup/gameSetupSlice';

export default configureStore({
  reducer: {
    gameSetup: gameSetupReducer
  },
});
