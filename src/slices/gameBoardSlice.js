import { createSlice } from '@reduxjs/toolkit';

export const gameBoardSlice = createSlice({
  name: 'gameBoard',
  initialState: {
    tileArray: [],
    score: 0,
  },
  reducers: {
    setTileArray: (state, action) => {
      state.tileArray = action.payload;
    },
    updateScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const {
  setTileArray,
  updateScore,
} = gameBoardSlice.actions;

export const tileArray = state => state.gameBoard.tileArray;
export const score = state => state.gameBoard.score;

export default gameBoardSlice.reducer;
