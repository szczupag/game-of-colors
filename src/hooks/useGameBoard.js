import { useEffect, useState } from 'react';
import checkGameStatus from '../helpers/checkGameStatus';
import getScore from '../helpers/processBoard';
import { setGameOver } from '../slices/gameBoardSlice';

const useGameBoard = ({
  array,
  colors,
  setArray,
  updateUserScore,
  setGameOverStatus,
}) => {
  useEffect(() => {
    if (array.length > 0) {
      const gameEnd = checkGameStatus(array); 
      if (gameEnd) setGameOverStatus();
    }
  }, [array]);

  const onTileClick = (row, col) => {
    const {
      score,
      updatedColorsArray,
    } = getScore(row, col, array, colors);
    updateUserScore(score);
    setArray(updatedColorsArray);
  };

  return {
    onTileClick,
  }
};

export default useGameBoard;
