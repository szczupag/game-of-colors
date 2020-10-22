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
  },
});

export const {
  updateScore,
} = gameBoardSlice.actions;

export const score = state => state.gameBoard.score;

export default gameBoardSlice.reducer;
