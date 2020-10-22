const hasNeighbour = (array, row, col) => {
  const current = array[row][col];
  if (row > 0) {
    if (array[row - 1][col] === current) return true;
  }
  if (row < array.length - 1) {
    if (array[row + 1][col] === current) return true;
  }
  if (col > 0) {
    if (array[row][col - 1] === current) return true;
  }
  if (col < array[0].length - 1) {
    if (array[row][col + 1] === current) return true;
  }
  return false;
};

export default hasNeighbour;
