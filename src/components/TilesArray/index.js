import React from 'react';
import Tile from '../Tile';
import rainbow from '../../helpers/rainbow';
import s from './TilesArray.module.css';

const TilesArray = ({
  array = [],
  colorsCount,
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
              color={rainbow(colorsCount, tile)}
            />
          ))}
        </div>
      ))}
    </div>
  );

export default TilesArray;
