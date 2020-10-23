import React from 'react';
import s from './Tile.module.css';

const Tile = ({
  color,
  onTileClick,
}) => (
    <div
      className={s.tile}
      onClick={onTileClick}
      style={{ backgroundColor: color }}
    >
    </div>
  );

export default Tile;
