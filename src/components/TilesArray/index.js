import React from 'react';
import Tile from '../Tile';
import s from './TilesArray.module.css';

const TilesArray = ({
  array = [],
  colors,
  onTileClick,
}) => (
    <div>
      {array.map((row, rowId) => (
        <div
          key={rowId}
          className={s.row}
        >
          {row.map((tile, colId) => (
            <Tile
              key={colId}
              onTileClick={() => onTileClick(rowId, colId)}
              color={colors[tile]}
            />
          ))}
        </div>
      ))}
    </div>
  );

export default TilesArray;
