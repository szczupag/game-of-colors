import React from 'react';

const SetupRow = ({
  label,
  value,
  onDecrement,
  onIncrement,
}) => (
  <div>
    <span>{label}</span>
    <button onClick={onDecrement}>-</button>
    <span>{value}</span>
    <button onClick={onIncrement}>+</button>
  </div>
);

export default SetupRow;
