import React from 'react';
import classes from './currentStats.module.css';

const CurrentStats = props => {
  const currentRound = props.currentRound || { index: 0, length: 0 };
  const total = props.total || { cards: 0, rounds: 0, archived: 0 };
  ///
  return (
    <div>
      <div className={classes.box}>
        <div className={classes.textBox}>
          <p>Current Round:</p>
          <p>
            {currentRound.index} / {currentRound.length}
          </p>
        </div>
        <div className={classes.textBox}>
          <p>Total</p>
          <p>Cards:</p>
          <p>{total.cards}</p>
          <p>Rounds:</p>
          <p>{total.rounds}</p>
        </div>
        <div className={classes.textBox} onClick={props.onClickArchiv}>
          <p>Archiv:</p>
          <p>{total.archived}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentStats;
