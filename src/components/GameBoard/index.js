import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useGameBoard from '../../hooks/useGameBoard';
import initGameBoard from '../../helpers/initGameBoard';
import {
  updateScore,
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
  const dispatch = useDispatch();
  const [array, setArray] = useState([[]]);
  
  const updateUserScore = (sc) => dispatch(updateScore(sc));
  
  useEffect(() => {
    const initArray = initGameBoard({ rows, columns, colors });
    setArray(initArray);
  }, []);

  const {
    onTileClick,
  } = useGameBoard({ array, setArray, updateUserScore, colors });

  return (
    <div>
      <p>Score: {userScore}</p>
      <TilesArray
        array={array}
        colors={colors}
        onTileClick={onTileClick}
      />
    </div>
  );
};

export default GameBoard;
