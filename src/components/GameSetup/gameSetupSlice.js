import { createSlice } from '@reduxjs/toolkit';

export const gameSetupSlice = createSlice({
  name: 'gameSetup',
  initialState: {
    rows: 5,
    columns: 12,
    colors: 5,
    isStarted: false,
  },
  reducers: {
    incrementRows: state => {
      state.rows += 1;
    },
    decrementRows: state => {
      if (state.rows > 0) state.rows -= 1;
    },
    incrementColumns: state => {
      state.columns += 1;
    },
    decrementColumns: state => {
      if (state.columns > 0) state.columns -= 1;
    },
    incrementColors: state => {
      state.colors += 1;
    },
    decrementColors: state => {
      if (state.colors > 0) state.colors -= 1;
    },
    startGame: state => {
      state.isStarted = true;
    },
    endGame: state => {
      state.isStarted = false;
    },
  },
});

export const {
  incrementRows,
  decrementRows,
  incrementColumns,
  decrementColumns,
  incrementColors,
  decrementColors,
  startGame,
} = gameSetupSlice.actions;

export const rowsCount = state => state.gameSetup.rows;
export const columnsCount = state => state.gameSetup.columns;
export const colorsCount = state => state.gameSetup.colors;
export const isStarted = state => state.gameSetup.isStarted;

export default gameSetupSlice.reducer;
