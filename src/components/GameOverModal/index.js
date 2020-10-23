import React from 'react';
import Button from '../Button';
import s from './GameOverModal.module.css';

const GameOverModal = ({
  visible,
  onButtonClick,
}) => {
  if (visible) return (
    <div className={s.root}>
      <div className={s.modalWrapper}>
        <span className={s.text}>There are no more possible moves!</span>
        <Button
          onClick={onButtonClick}
          label='Back to home'
        />
      </div>
    </div>
  );
  return null;
};

export default GameOverModal;
