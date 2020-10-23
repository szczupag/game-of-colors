import React from 'react';
import s from './Button.module.css';

const Button = ({
  label,
  onClick
}) => (
  <button
    className={s.button}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
