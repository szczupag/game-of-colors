import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SetupRow from '../SetupRow';
import {
  incrementRows,
  decrementRows,
  incrementColumns,
  decrementColumns,
  incrementColors,
  decrementColors,
  startGame,
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
      <SetupRow
        label="Rows"
        value={rows}
        onDecrement={() => dispatch(decrementRows())}
        onIncrement={() => dispatch(incrementRows())}
      />
      <SetupRow
        label="Columns"
        value={columns}
        onDecrement={() => dispatch(decrementColumns())}
        onIncrement={() => dispatch(incrementColumns())}
      />
      <SetupRow
        label="Colors"
        value={colors}
        onDecrement={() => dispatch(decrementColors())}
        onIncrement={() => dispatch(incrementColors())}
      />
      <button onClick={() => dispatch(startGame())}>Start!</button>
    </div>
  )
};

export default GameSetup;
