import React from 'react';
import classes from './learn.module.css';

//components
import QuestionBox from './questionBox';

const Learn = props => {
  return (
    <div className={classes.lernBox}>
      <QuestionBox></QuestionBox>
    </div>
  );
};

export default Learn;
