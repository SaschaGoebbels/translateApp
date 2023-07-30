import React from 'react';
import classes from './QuestionBox.module.css';
import ButtonBox from '../ui/ButtonBox';
import ButtonRound from '../ui/ButtonRound';
import { textToSpeech } from '../logic/textToSpeech';

const QuestionBox = props => {
  return (
    <div
      className={classes.questionBox}
      onKeyDown={() => {
        console.log('✅');
      }}
    >
      <div className={classes.editButtonBox}>
        <ButtonRound
          btnId="arrowLeft"
          className={classes.buttonAddEdit}
          buttonName={'arrowLeft'}
          borderColor={'rgba(0, 0, 0, 0.0)'}
          shadow={'0px 0px 0px rgba(0, 0, 0, 0.0)'}
          color={''}
          iconColor={''}
          onClickHandler={props.onClickHandler}
        ></ButtonRound>
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
        <div className={classes.textButtonBox}>
          <p>{props.text1}</p>
          <div className={classes.buttonSpeech}>
            <ButtonRound
              btnId="speech"
              className={classes.buttonAddEdit}
              buttonName={'speech'}
              borderColor={'rgba(0, 0, 0, 0.0)'}
              shadow={'0px 0px 0px rgba(0, 0, 0, 0.0)'}
              color={''}
              iconColor={''}
              // onClickHandler={props.onClickHandler}
              onClickHandler={() => {
                textToSpeech(props.text1);
              }}
            ></ButtonRound>
          </div>
        </div>
        <div className={classes.textBoxUnderLine}></div>
        <div className={classes.textButtonBox}>
          <p>{props.text2}</p>
          <div className={classes.buttonSpeech}>
            <ButtonRound
              btnId="speech"
              className={classes.buttonAddEdit}
              buttonName={'speech'}
              borderColor={'rgba(0, 0, 0, 0.0)'}
              shadow={'0px 0px 0px rgba(0, 0, 0, 0.0)'}
              color={''}
              iconColor={''}
              // onClickHandler={props.onClickHandler}
              onClickHandler={() => {
                textToSpeech(props.text2);
              }}
            ></ButtonRound>
          </div>
        </div>
      </div>
      <div className={classes.buttonBox}>
        <ButtonBox
          hideXBtn={props.hideXBtn || false}
          hideQuest={props.hideQuest || false}
          hideCheck={props.hideCheck || false}
          hideTrash={true}
          onClickHandler={props.onClickHandler}
        ></ButtonBox>
        <dir className={classes.buttonBoxInfo}>i. {props.interval}</dir>
      </div>
    </div>
  );
};

export default QuestionBox;
