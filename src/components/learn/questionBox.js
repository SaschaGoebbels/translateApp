import React from 'react';
import classes from './questionBox.module.css';
import ButtonBox from '../ui/buttonBox';
import ButtonRound from '../ui/buttonRound';

const QuestionBox = props => {
  return (
    <div className={classes.questionBox}>
      <div className={classes.editButtonBox}>
        <ButtonRound
          btnId="pen"
          className={classes.buttonAddEdit}
          buttonName={'pen'}
          borderColor={'rgba(0, 0, 0, 0.0)'}
          shadow={'0px 0px 0px rgba(0, 0, 0, 0.0)'}
          color={''}
          iconColor={''}
          onClickHandler={props.onClickHandler}
        ></ButtonRound>
      </div>
      <div className={classes.textBox}>
        <p>Hier steht die Frage</p>
        <div className={classes.textBoxUnderLine}></div>
        <p>Hier steht die Frage</p>
      </div>
      <ButtonBox
        hideXBtn={false}
        hideQuest={false}
        hideCheck={false}
        onClickHandler={props.onClickHandler}
      ></ButtonBox>
    </div>
  );
};

export default QuestionBox;
