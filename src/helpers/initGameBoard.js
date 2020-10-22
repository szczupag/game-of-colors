import rainbow from '../helpers/rainbow';

const initGameBoard = ({
  rows,
  columns,
  colors,
}) => {
  const initRow = () => Array.from({length: columns}, () => Math.floor(Math.random() * colors));
  
  const tilesArray = Array.from({ length: rows }, initRow);
  const colorsArray = Array.from(Array(colors).keys()).map(number => rainbow(colors, number));

  return {
    tilesArray,
    colorsArray,
  }
};

export default initGameBoard;
