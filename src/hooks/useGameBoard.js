import rainbow from '../helpers/rainbow';

const createArrayWithFalseValues = (rows, cols) => {
  return Array.from({ length: rows }, () => Array.from({ length: cols }, () => false));
};

const useGameBoard = ({
  array,
  setArray,
  updateUserScore,
  colors,
}) => {
  const maxRow = array.length - 1;
  const maxCol = array[0].length - 1;

  const visitAllNeighbours = (arr, visited, row, col, color, score) => {
    let newScore = score;
    if (row > 0) newScore = checkNeighbours(arr, visited, row - 1, col, color, newScore);
    if (row < maxRow) newScore = checkNeighbours(arr, visited, row + 1, col, color, newScore);
    if (col > 0) newScore = checkNeighbours(arr, visited, row, col - 1, color, newScore);
    if (col < maxCol) newScore = checkNeighbours(arr, visited, row, col + 1, color, newScore);
    return newScore;
  };

  const checkNeighbours = (arr, visited, row, col, color, score) => {
    if (!visited[row][col]) {
      visited[row][col] = true;
      const current = rainbow(colors, arr[row][col]);
      if (current === color) return visitAllNeighbours(arr, visited, row, col, current, score + 1);
    }
    return score;
  };

  const onTileClick = (row, col) => {
    const newArray = array.map(arr => arr.slice());
    const visitedArray = createArrayWithFalseValues(maxRow + 1, maxCol + 1);
    const score = checkNeighbours(newArray, visitedArray, row, col, rainbow(colors, newArray[row][col]), 0);
    if (score > 1) updateUserScore(score);
    setArray(newArray);
  };

  return {
    onTileClick,
  }
};

export default useGameBoard;
