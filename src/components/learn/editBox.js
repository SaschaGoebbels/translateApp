import React, { useState, useEffect } from 'react';
import classes from './questionBox.module.css';
import ButtonBox from '../ui/buttonBox';
import ButtonRound from '../ui/buttonRound';
import TextBoxEdit from './textBoxEdit';

const EditBox = props => {
  const [text1State, setText1State] = useState(props.currentObject.text1);
  const [text2State, setText2State] = useState(props.currentObject.text2);

  useEffect(() => {
    setText1State(props.currentObject.text1);
    setText2State(props.currentObject.text2);
  }, [props.text1]);

  const onChangeHandlerText1 = () => {
    setText1State(document.getElementById('text1').value);
  };
  const onChangeHandlerText2 = () => {
    setText2State(document.getElementById('text2').value);
  };
  //==================================================================
  const onClickHandlerRoundButton = id => {
    if (id === 'x') props.disableEditMode();
    if (id === 'trash') {
      props.deleteItem();
      props.disableEditMode();
    }
    if (id === 'check') {
      props.editItem({ text1: text1State, text2: text2State });
      props.disableEditMode();
    }
  };
  //==================================================================
  return (
    <div
      className={classes.questionBox}
      onKeyDown={() => {
        // console.log('✅');
      }}
    >
      <div className={classes.textBox}>
        <TextBoxEdit
          onChange={onChangeHandlerText1}
          id="text1"
          value={text1State}
        ></TextBoxEdit>
        <div className={classes.textBoxUnderLine}></div>
        <TextBoxEdit
          onChange={onChangeHandlerText2}
          id="text2"
          value={text2State}
        ></TextBoxEdit>
      </div>
      <ButtonBox
        hideXBtn={false}
        hideQuest={true}
        hideCheck={false}
        onClickHandler={onClickHandlerRoundButton}
        // onClickHandler={props.onClickHandler(text1State, text2State)}
      ></ButtonBox>
    </div>
  );
};

export default EditBox;
