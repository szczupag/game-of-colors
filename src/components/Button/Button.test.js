import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from './index';

it('Renders button label', () => {
  const label = "Submit";
  const mockOnClick = jest.fn();
  const { getByText } = render(
    <Button
      onClick={mockOnClick}
      label={label}
    />
  );
  expect(getByText(label)).toBeTruthy();
});

it('Calls function on button click', () => {
  const label = "Submit";
  const mockOnClick = jest.fn();
  const { getByText } = render(
    <Button
      onClick={mockOnClick}
      label={label}
    />
  );
  fireEvent.click(getByText(label));
  expect(mockOnClick).toHaveBeenCalled();
});
