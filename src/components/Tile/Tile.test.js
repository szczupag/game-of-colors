import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Tile from './index';

it('Calls function on tile click', () => {
  const mockOnClick = jest.fn();
  const color = "rgb(255, 255, 255)";
  const { container } = render(
    <Tile
      onTileClick={mockOnClick}
      color={color}
    />
  );
  fireEvent.click(container.firstChild);
  expect(mockOnClick).toHaveBeenCalled();
});

it('Has the correct background color', () => {
  const mockOnClick = jest.fn();
  const color = "rgb(255, 255, 255)";
  const { container } = render(
    <Tile
      onTileClick={mockOnClick}
      color={color}
    />
  );
  const tile = container.firstChild;
  expect(tile.style.backgroundColor).toBe(color);
});
