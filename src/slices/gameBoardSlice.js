import { createSlice } from '@reduxjs/toolkit';

export const gameBoardSlice = createSlice({
  name: 'gameBoard',
  initialState: {
    score: 0,
  },
  reducers: {
    updateScore: (state, action) => {
      state.score += action.payload;
    },
    clearScore: state => {
      state.score = 0;
    }
  },
});

export const {
  updateScore,
  clearScore,
} = gameBoardSlice.actions;

export const score = state => state.gameBoard.score;

export default gameBoardSlice.reducer;
