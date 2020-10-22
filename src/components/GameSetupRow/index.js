import React from 'react';
import s from './styles.module.css';

const SetupRow = ({
  label,
  value,
  onDecrement,
  onIncrement,
}) => (
    <div className={s.root}>
      <span>{label}</span>
      <div className={s.controls}>
        <button
          className={s.button}
          onClick={onDecrement}
        >
          -
        </button>
        <span className={s.value}>{value}</span>
        <button
          className={s.button}
          onClick={onIncrement}
        >
          +
        </button>
      </div>
    </div>
  );

export default SetupRow;
