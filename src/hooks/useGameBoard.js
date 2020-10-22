import { useEffect, useState } from 'react';
import checkGameStatus from '../helpers/checkGameStatus';
import getScore from '../helpers/processBoard';

const useGameBoard = ({
  array,
  colors,
  setArray,
  updateUserScore,
}) => {
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (array.length > 0) {
      const gameNotEnded = checkGameStatus(array); 
      setIsEnd(!gameNotEnded);
    }
  }, [array]);

  const onTileClick = (row, col) => {
    const {
      score,
      updated,
    } = getScore(row, col, array, colors);
    updateUserScore(score);
    setArray(updated);
  };

  return {
    onTileClick,
    isEnd,
  }
};

export default useGameBoard;
