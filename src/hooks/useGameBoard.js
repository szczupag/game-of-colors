import getScore from '../helpers/processBoard';

const useGameBoard = ({
  array,
  colors,
  setArray,
  updateUserScore,
}) => {
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
  }
};

export default useGameBoard;
