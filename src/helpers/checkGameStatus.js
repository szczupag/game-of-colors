import hasNeighbour from "./hasNeighbour";

const checkGameStatus = (array) => {
  const res = array.some((row, rowId) => row.some((tile, colId) => hasNeighbour(array, rowId, colId)));
  return !res;
};

export default checkGameStatus;
