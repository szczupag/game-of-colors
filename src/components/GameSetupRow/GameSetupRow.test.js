import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import GameSetupRow from './index';

describe('When minus button is clicked', () => {
  it('Calls onDecrement function', () => {
    const mockOnDecrement = jest.fn();
    const { getByText } = render(
      <GameSetupRow
        label="Row"
        value={10}
        onDecrement={mockOnDecrement}
        onIncrement={() => {}}
      />
    );
    const minusButton = getByText('-');
    fireEvent.click(minusButton);
    expect(mockOnDecrement).toHaveBeenCalled();
  });
});

describe('When plus button is clicked', () => {
  it('Calls onIncrement function', () => {
    const mockOnIncrement = jest.fn();
    const { getByText } = render(
      <GameSetupRow
        label="Row"
        value={10}
        onDecrement={() => {}}
        onIncrement={mockOnIncrement}
      />
    );
    const plusButton = getByText('+');
    fireEvent.click(plusButton);
    expect(mockOnIncrement).toHaveBeenCalled();
  });
});
