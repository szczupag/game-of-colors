import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../app/store';
import GameSetup from './index';

it('Renders game setup and start button', () => {
  const { getByText } = render(
    <Provider store={store}>
      <GameSetup />
    </Provider>
  );
  expect(getByText("Rows")).toBeTruthy();
  expect(getByText("Columns")).toBeTruthy();
  expect(getByText("Colors")).toBeTruthy();
  expect(getByText("Start")).toBeTruthy();
});
