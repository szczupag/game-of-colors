import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score: 0,
  gameOver: false,
}

export const gameBoardSlice = createSlice({
  name: 'gameBoard',
  initialState,
  reducers: {
    updateScore: (state, action) => {
      state.score += action.payload;
    },
    setGameOver: state => {
      state.gameOver = true;
    },
    resetGame: () => initialState,
  },
});

export const {
  updateScore,
  setGameOver,
  resetGame,
} = gameBoardSlice.actions;

export const score = state => state.gameBoard.score;
export const gameOver = state => state.gameBoard.gameOver;

export default gameBoardSlice.reducer;
