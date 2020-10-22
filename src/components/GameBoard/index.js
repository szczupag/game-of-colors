import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setTileArray,
  updateScore,
  tileArray,
  score,
} from '../../slices/gameBoardSlice';


const GameBoard = () => {
  const array = useSelector(tileArray);
  const userScore = useSelector(score);
  // const dispatch = useDispatch();

  return (
    <div>
      <p>Score: {userScore}</p>
    </div>
  );
};

export default GameBoard;
