import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useGameBoard from '../../hooks/useGameBoard';
import initGameBoard from '../../helpers/initGameBoard';
import {
  setTileArray,
  updateScore,
  tileArray,
  score,
} from '../../slices/gameBoardSlice';
import {
  rowsCount,
  columnsCount,
  colorsCount,
} from '../../slices/gameSetupSlice';
import TilesArray from '../TilesArray';


const GameBoard = () => {
  const rows = useSelector(rowsCount);
  const columns = useSelector(columnsCount);
  const colors = useSelector(colorsCount);
  const userScore = useSelector(score);
  const array = useSelector(tileArray);
  const dispatch = useDispatch();
  
  const updateUserScore = (sc) => dispatch(updateScore(sc));
  const updateArray = (arr) => dispatch(setTileArray(arr));

  const initArray = initGameBoard({ rows, columns, colors });
  useEffect(() => {
    updateArray(initArray);
  }, []);

  const {
    onTileClick,
  } = useGameBoard({ array, updateArray, updateUserScore });

  return (
    <div>
      <p>Score: {userScore}</p>
      <TilesArray
        array={array}
        colorsCount={colors}
        onTileClick={onTileClick}
      />
    </div>
  );
};

export default GameBoard;
