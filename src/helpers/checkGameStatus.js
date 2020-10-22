const checkGameStatus = (array) => {
  const res = array.some((row, rowId) => row.some((tile, colId) => {
    const current = array[rowId][colId];
    if (rowId > 0) {
      if (array[rowId - 1][colId] === current) return true;
    }
    if (rowId < array.length - 1) {
      if (array[rowId + 1][colId] === current) return true;
    }
    if (colId > 0) {
      if (array[rowId][colId - 1] === current) return true;
    }
    if (colId < array[0].length - 1) {
      if (array[rowId][colId + 1] === current) return true;
    }
    return false;
  }));
  return !res;
};

export default checkGameStatus;
