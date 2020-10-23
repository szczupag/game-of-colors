import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import GameOverModal from './index';

it('Renders modal when visibility is set to true', () => {
  const mockOnClick = jest.fn();
  const { getByText } = render(
    <GameOverModal
      visible={true}
      onButtonClick={mockOnClick}
    />
  );
  expect(getByText("There are no more possible moves!")).toBeTruthy();
});

it("Doesn't render modal when visibility is set to false", () => {
  const mockOnClick = jest.fn();
  const { queryByText } = render(
    <GameOverModal
      visible={false}
      onButtonClick={mockOnClick}
    />
  );
  const modalText = queryByText("There are no more possible moves!");
  expect(modalText).toBeNull();
});

it('Calls function on back button click', () => {
  const mockOnClick = jest.fn();
  const { getByText } = render(
    <GameOverModal
      visible={true}
      onButtonClick={mockOnClick}
    />
  );
  fireEvent.click(getByText("Back to home"));
  expect(mockOnClick).toHaveBeenCalled();
});
