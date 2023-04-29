import React from 'react';
import classes from './buttonBox.module.css';
import ButtonRound from './buttonRound';

const ButtonBox = props => {
  const onClickHandler = item => {
    props.onClickHandler(item);
    // console.log('ButtonBox', item);
  };
  return (
    <div className={classes.buttonBox}>
      {!props.hideXBtn && (
        <ButtonRound
          btnId="x"
          className={classes.buttonAddEdit}
          buttonName={'x'}
          color={'#fa5252'}
          iconColor={''}
          isFav={''}
          onClickHandler={onClickHandler}
        />
      )}
      {!props.hideQuest && (
        <ButtonRound
          btnId="quest"
          className={classes.buttonAddEdit}
          buttonName={'quest'}
          color={'#ffa94d'}
          iconColor={''}
          isFav={''}
          onClickHandler={onClickHandler}
        />
      )}
      {!props.hideCheck && (
        <ButtonRound
          btnId="check"
          className={classes.buttonAddEdit}
          buttonName={'check'}
          color={''}
          iconColor={''}
          isFav={''}
          onClickHandler={onClickHandler}
        />
      )}
    </div>
  );
};

export default ButtonBox;
