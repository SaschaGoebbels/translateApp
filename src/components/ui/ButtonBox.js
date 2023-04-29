import React from 'react';
import classes from './buttonBox.module.css';
import ButtonRound from './buttonRound';

const ButtonBox = props => {
  const onClickHandler = id => {
    props.onClickHandler(id);
  };
  return (
    <div className={classes.buttonBox}>
      {!props.hideXBtn && (
        <ButtonRound
          btnId="x"
          className={classes.buttonAddEdit}
          buttonName={'x'}
          color={'#e34242'}
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
          color={'#f08b35'}
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
          color={'#42bd71'}
          iconColor={''}
          isFav={''}
          onClickHandler={onClickHandler}
        />
      )}
    </div>
  );
};

export default ButtonBox;
