import React, { useState } from 'react';
import classes from './questionBox.module.css';
import ButtonBox from '../ui/buttonBox';
import ButtonRound from '../ui/buttonRound';

//redux
import { useSelector, useDispatch } from 'react-redux';

const QuestionBox = props => {
  const dispatch = useDispatch();
  const learn = useSelector(state => state.appData.learn);
  const [learnState, setLearnState] = useState(learn);
  //filter interval
  //show text ?
  //show answer
  //update object
  //update current progress
  const filteredArray = array => {
    return array.filter(el => el.count >= el.interval);
  };
  const onClickHandler = id => {
    // console.log('✅', id);
  };
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
          onClickHandler={onClickHandler}
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
        onClickHandler={onClickHandler}
      ></ButtonBox>
    </div>
  );
};

export default QuestionBox;
