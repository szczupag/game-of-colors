import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useGameBoard from '../../hooks/useGameBoard';
import initGameBoard from '../../helpers/initGameBoard';
import {
  setTileArray,
  updateScore,
  score,
} from '../../slices/gameBoardSlice';
import {
  rowsCount,
  columnsCount,
  colorsCount,
} from '../../slices/gameSetupSlice';


const GameBoard = () => {
  const rows = useSelector(rowsCount);
  const columns = useSelector(columnsCount);
  const colors = useSelector(colorsCount);
  const userScore = useSelector(score);
  const dispatch = useDispatch();
  
  const updateUserScore = (sc) => dispatch(updateScore(sc));
  const initArray = initGameBoard({ rows, columns, colors });

  const {
    tileArray,
    onTileClick,
  } = useGameBoard({ initArray, updateUserScore });

  return (
    <div>
      <p>Score: {userScore}</p>
    </div>
  );
};

export default GameBoard;
