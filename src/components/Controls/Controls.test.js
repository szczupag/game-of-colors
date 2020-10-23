import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Controls from './index';

it('Renders score', () => {
  const score = '10';
  const mockOnClick = jest.fn();
  const { getByText } = render(
    <Controls
      score={score}
      onButtonClick={mockOnClick}
    />
  );
  expect(getByText(score)).toBeTruthy();
});

it('Calls function on back button click', () => {
  const score = '10';
  const mockOnClick = jest.fn();
  const { getByText } = render(
    <Controls
      score={score}
      onButtonClick={mockOnClick}
    />
  );
  fireEvent.click(getByText("Back to home"));
  expect(mockOnClick).toHaveBeenCalled();
});
