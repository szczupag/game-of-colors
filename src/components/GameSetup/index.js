import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SetupRow from '../GameSetupRow';
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
import s from './styles.module.css';

const GameSetup = () => {
  const rows = useSelector(rowsCount);
  const columns = useSelector(columnsCount);
  const colors = useSelector(colorsCount);
  const dispatch = useDispatch();

  return (
    <div className={s.root}>
      <div className={s.innerWrapper}>
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
        <button
          onClick={() => dispatch(startGame())}
          className={s.submit}
        >
          Start
        </button>
      </div>
    </div>
  )
};

export default GameSetup;
