import React from 'react';
import classes from './questionBox.module.css';
import ButtonBox from '../ui/buttonBox';
import ButtonRound from '../ui/buttonRound';
import SpellChecker from './spellChecker';

const QuestionBox = props => {
  const onClickHandler = el => {
    console.log('✅', el);
  };
  return (
    <div className={classes.questionBox}>
      <div>
        <ButtonRound
          btnId="pen"
          className={classes.buttonAddEdit}
          buttonName={'pen'}
          color={''}
          // color={'#fa5252'}
          iconColor={''}
          isFav={''}
          onClickHandler={onClickHandler}
        ></ButtonRound>
      </div>
      <p>Hier steht die Frage</p>
      <SpellChecker></SpellChecker>
      <ButtonBox></ButtonBox>
    </div>
  );
};

export default QuestionBox;
