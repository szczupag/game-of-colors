import React from 'react';
import s from './Controls.module.css';

const Controls = ({
  score,
  onBackButtonClick
}) => (
    <div className={s.gameControls}>
      <div className={s.scoreWrapper}>
        <span>Score:</span>
        <span className={s.score}>{score}</span>
      </div>
      <div
        onClick={onBackButtonClick}
        className={s.buttonWrapper}
      >
        <span>Back to home</span>
      </div>
    </div>
  );

export default Controls;
