import updateBoardColors from './updateBoardColors';
import createVisitedArray from './createVisitedArray';
import hasNeighbour from './hasNeighbour';

const visitAllNeighbours = (gameState, currentTile) => {
  const { array } = gameState;
  const { row, col } = currentTile;
  const maxRow = array.length - 1;
  const maxCol = array[0].length - 1;
  if (row > 0) gameState.score = checkTile(gameState, { row: row - 1, col });
  if (row < maxRow) gameState.score = checkTile(gameState, { row: row + 1, col });
  if (col > 0) gameState.score = checkTile(gameState, { row, col: col - 1 });
  if (col < maxCol) gameState.score = checkTile(gameState, { row, col: col + 1 });
  return gameState.score;
};

const checkTile = (gameState, currentTile) => {
  const { array, visitedArray, targetColor } = gameState;
  const { row, col } = currentTile;
  if (!visitedArray[row][col]) {
    visitedArray[row][col] = true;
    const currentColor = array[row][col];
    if (currentColor === targetColor) {
      gameState.score += 1;
      gameState.score = visitAllNeighbours(gameState, currentTile);
      updateBoardColors(gameState, currentTile);
    }
  }
  return gameState.score;
};


const processBoard = (row, col, array, colors) => {
  if (!hasNeighbour(array, row, col)) {
    return {
      score: 0,
      updatedColorsArray: array,
    }
  }
  const visitedArray = createVisitedArray(array.length, array[0].length);
  const updatedColorsArray = array.map(arr => arr.slice());
  const gameState = {
    array,
    visitedArray,
    updatedColorsArray,
    colors,
    score: 0,
    targetColor: array[row][col],
  };
  const currentTile = {
    row,
    col,
  };

  const score = checkTile(gameState, currentTile);

  return {
    score: score > 1 ? score : 0,
    updatedColorsArray,
  }
};

export default processBoard;
