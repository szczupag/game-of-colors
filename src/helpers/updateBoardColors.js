const updateBoardColors = (gameState, currentTile) => {
  const { array, updatedColorsArray, colors, targetColor } = gameState;
  const { row, col } = currentTile;
  if (row === array.length - 1 || array[row + 1][col] !== targetColor) {
    let tilesInRow = 1;
    while (row - tilesInRow >= 0 && updatedColorsArray[row - tilesInRow][col] === targetColor) {
      tilesInRow += 1;
    }
    for (let currentRow = row; currentRow >= 0; currentRow--) {
      const targetRow = currentRow - tilesInRow;
      if (targetRow >= 0) updatedColorsArray[currentRow][col] = array[targetRow][col];
      else updatedColorsArray[currentRow][col] = Math.floor(Math.random() * colors);
    }
  }
};

export default updateBoardColors;
