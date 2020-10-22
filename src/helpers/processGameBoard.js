import createVisitedArray from '../helpers/visitedArray';

const visitAllNeighbours = (tiles, visited, row, col, color, score) => {
  const maxRow = tiles.length - 1;
  const maxCol = tiles[0].length - 1;
  let newScore = score;
  if (row > 0) newScore = checkTile(tiles, visited, row - 1, col, color, newScore);
  if (row < maxRow) newScore = checkTile(tiles, visited, row + 1, col, color, newScore);
  if (col > 0) newScore = checkTile(tiles, visited, row, col - 1, color, newScore);
  if (col < maxCol) newScore = checkTile(tiles, visited, row, col + 1, color, newScore);
  return newScore;
};

const checkTile = (arr, visited, row, col, color, score) => {
  if (!visited[row][col]) {
    visited[row][col] = true;
    const current = arr[row][col];
    if (current === color) {
      const newScore = visitAllNeighbours(arr, visited, row, col, current, score + 1);
      return newScore;
    }
  }
  return score;
};

const processBoard = (row, col, array) => {
  const tileArray = array.map(arr => arr.slice());
  const visitedArray = createVisitedArray(array.length, array[0].length);
  const score = checkTile(tileArray, visitedArray, row, col, tileArray[row][col], 0);
  return score > 1 ? score : 0;
};

export default processBoard;
