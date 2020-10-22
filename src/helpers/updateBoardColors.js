const updateBoardColors = (tiles, updated, row, col, color, colors) => {
  if (row === tiles.length - 1 || tiles[row + 1][col] !== color) {
    let tilesInRow = 1;
    while (row - tilesInRow >= 0 && updated[row - tilesInRow][col] === color) {
      tilesInRow += 1;
    }
    for (let currentRow = row; currentRow >= 0; currentRow--) {
      const targetRow = currentRow - tilesInRow;
      if (targetRow >= 0) updated[currentRow][col] = tiles[targetRow][col];
      else updated[currentRow][col] = Math.floor(Math.random() * colors);
    }
  }
};

export default updateBoardColors;
