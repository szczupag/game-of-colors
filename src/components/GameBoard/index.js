import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useGameBoard from '../../hooks/useGameBoard';
import initGameBoard from '../../helpers/initGameBoard';
import TilesArray from '../TilesArray';
import Controls from '../Controls';
import GameOverModal from '../GameOverModal';
import {
  updateScore,
  setGameOver,
  resetGame,
  score,
  gameOver,
} from '../../slices/gameBoardSlice';
import {
  rowsCount,
  columnsCount,
  colorsCount,
  resetSetup,
} from '../../slices/gameSetupSlice';


const GameBoard = () => {
  const rows = useSelector(rowsCount);
  const columns = useSelector(columnsCount);
  const colors = useSelector(colorsCount);
  const userScore = useSelector(score);
  const gameOverStatus = useSelector(gameOver);
  const dispatch = useDispatch();
  const [array, setArray] = useState([]);
  const [colorsArray, setColorsArray] = useState([]);

  const updateUserScore = (sc) => dispatch(updateScore(sc));
  const setGameOverStatus = () => dispatch(setGameOver());

  const backButtonClickHandler = () => {
    dispatch(resetSetup());
    dispatch(resetGame());
  }

  useEffect(() => {
    const { tilesArray, colorsArray } = initGameBoard({ rows, columns, colors });
    setArray(tilesArray);
    setColorsArray(colorsArray);
  }, []);

  const {
    onTileClick,
  } = useGameBoard({ array, setArray, updateUserScore, setGameOverStatus, colors });


  return (
    <div>
      <Controls
        score={userScore}
        onButtonClick={backButtonClickHandler}
      />
      <TilesArray
        array={array}
        colors={colorsArray}
        onTileClick={onTileClick}
      />
      <GameOverModal
        visible={gameOverStatus}
        onButtonClick={backButtonClickHandler}
      />
    </div>
  );
};

export default GameBoard;
