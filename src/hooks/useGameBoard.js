const useGameBoard = ({}) => {
  const onTileClick = (row, col) => {
    console.log(`Tile: ${row} - ${col} clicked!`);
  };
  return {
    onTileClick,
  }
};

export default useGameBoard;
