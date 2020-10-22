import processBoard from '../helpers/processGameBoard';

const useGameBoard = ({
  array,
  setArray,
  updateUserScore,
}) => {
  const onTileClick = (row, col) => {
    const score = processBoard(row, col, array);
    updateUserScore(score);
  };

  return {
    onTileClick,
  }
};

export default useGameBoard;
