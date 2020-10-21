import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementRows,
  decrementRows,
  incrementColumns,
  decrementColumns,
  incrementColors,
  decrementColors,
  rowsCount,
  columnsCount,
  colorsCount,
} from './gameSetupSlice';

const GameSetup = () => {
  const rows = useSelector(rowsCount);
  const columns = useSelector(columnsCount);
  const colors = useSelector(colorsCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Game of colors</h1>
      <div>
        <button onClick={() => dispatch(decrementRows())}>-</button>
        <span>rows: {rows}</span>
        <button onClick={() => dispatch(incrementRows())}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrementColumns())}>-</button>
        <span>columns: {columns}</span>
        <button onClick={() => dispatch(incrementColumns())}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrementColors())}>-</button>
        <span>colors: {colors}</span>
        <button onClick={() => dispatch(incrementColors())}>+</button>
      </div>
    </div>
  )
};

export default GameSetup;
