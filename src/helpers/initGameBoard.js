const initGameBoard = ({
  rows,
  columns,
  colors,
}) => {
  const initRow = () => Array.from({length: columns}, () => Math.floor(Math.random() * colors));
  const initArray = () => {
    return Array.from({ length: rows }, initRow);
  };

  return initArray();
};

export default initGameBoard;
