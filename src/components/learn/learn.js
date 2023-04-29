import React from 'react';
import classes from './learn.module.css';

//components
import QuestionBox from './questionBox';
import CurrentStats from './currentStats';

const Learn = props => {
  return (
    <div className={classes.lernBox}>
      <CurrentStats></CurrentStats>
      <QuestionBox></QuestionBox>
    </div>
  );
};

export default Learn;
