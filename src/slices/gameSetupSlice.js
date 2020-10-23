import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rows: 5,
  columns: 12,
  colors: 5,
  isStarted: false,
};

export const gameSetupSlice = createSlice({
  name: 'gameSetup',
  initialState,
  reducers: {
    incrementRows: state => {
      state.rows += 1;
    },
    decrementRows: state => {
      if (state.rows > 1) state.rows -= 1;
    },
    incrementColumns: state => {
      state.columns += 1;
    },
    decrementColumns: state => {
      if (state.columns > 1) state.columns -= 1;
    },
    incrementColors: state => {
      state.colors += 1;
    },
    decrementColors: state => {
      if (state.colors > 1) state.colors -= 1;
    },
    startGame: state => {
      state.isStarted = true;
    },
    resetSetup: () => initialState,
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
  resetSetup,
} = gameSetupSlice.actions;

export const rowsCount = state => state.gameSetup.rows;
export const columnsCount = state => state.gameSetup.columns;
export const colorsCount = state => state.gameSetup.colors;
export const isStarted = state => state.gameSetup.isStarted;

export default gameSetupSlice.reducer;
