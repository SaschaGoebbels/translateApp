import React from 'react';
import classes from './ButtonRound.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ButtonRound = props => {
  let buttonIconColor = props.iconColor;
  let buttonClassName = props.className;
  let buttonName;
  switch (props.buttonName) {
    case 'check':
      buttonName = faCheck;
      break;
    case 'x':
      buttonName = faX;
      break;
    case 'pen':
      buttonName = faPenToSquare;
      break;
    case 'quest':
      buttonName = faQuestion;
      break;
    case 'trash':
      buttonName = faTrash;
      break;
    default:
      buttonName = faCheck;
  }
  let buttonSize =
    props.buttonSize === 'small'
      ? classes.buttonRound_small
      : props.buttonSize === 'large'
      ? classes.buttonRound_large
      : classes.buttonRound_medium; //small medium large

  let buttonColor = props.color || '';
  let buttonBorderColor = props.borderColor || '#087f5b';
  let buttonShadow = props.shadow || '0px 2px 20px rgba(0, 0, 0, 0.5)';

  const btnClickHandler = id => {
    props.onClickHandler(id.currentTarget.id);
  };
  return (
    <div
      id={props.btnId}
      style={{
        backgroundColor: buttonColor,
        border: `${buttonBorderColor} solid 3px`,
        boxShadow: `${buttonShadow}`,
      }}
      className={`${classes.buttonRound} ${buttonSize} ${buttonClassName} ${classes.button}`}
      onClick={btnClickHandler}
    >
      <FontAwesomeIcon
        icon={buttonName}
        id={props.id}
        className={classes.buttonRound__icon}
        color={buttonIconColor}
      />
    </div>
  );
};

export default ButtonRound;
