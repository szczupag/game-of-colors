import React from 'react';
import Button from '../Button';
import s from './Controls.module.css';

const Controls = ({
  score,
  onButtonClick
}) => (
    <div className={s.gameControls}>
      <div className={s.scoreWrapper}>
        <span>Score:</span>
        <span className={s.score}>{score}</span>
      </div>
      <Button
        onClick={onButtonClick}
        label='Back to home'
      />
    </div>
  );

export default Controls;
