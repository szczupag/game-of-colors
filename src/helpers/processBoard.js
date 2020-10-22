import updateBoardColors from './updateBoardColors';
import createVisitedArray from './visitedArray';

const visitAllNeighbours = (tiles, visited, updated, row, col, color, score, colors) => {
  const maxRow = tiles.length - 1;
  const maxCol = tiles[0].length - 1;
  let newScore = score;
  if (row > 0) newScore = checkTile(tiles, visited, updated, row - 1, col, color, newScore, colors);
  if (row < maxRow) newScore = checkTile(tiles, visited, updated, row + 1, col, color, newScore, colors);
  if (col > 0) newScore = checkTile(tiles, visited, updated, row, col - 1, color, newScore, colors);
  if (col < maxCol) newScore = checkTile(tiles, visited, updated, row, col + 1, color, newScore, colors);
  return newScore;
};

const checkTile = (tiles, visited, updated, row, col, color, score, colors) => {
  if (!visited[row][col]) {
    visited[row][col] = true;
    const currentColor = tiles[row][col];
    if (currentColor === color) {
      const newScore = visitAllNeighbours(tiles, visited, updated, row, col, color, score + 1, colors);
      updateBoardColors(tiles, updated, row, col, color, colors);
      return newScore;
    }
  }
  return score;
};

const processBoard = (row, col, array, colors) => {
  const tileArray = array.map(arr => arr.slice());
  const visitedArray = createVisitedArray(array.length, array[0].length);
  const updated = array.map(arr => arr.slice());
  const score = checkTile(tileArray, visitedArray, updated, row, col, tileArray[row][col], 0, colors);
  return {
    score: score > 1 ? score : 0,
    updated,
  }
};

export default processBoard;
