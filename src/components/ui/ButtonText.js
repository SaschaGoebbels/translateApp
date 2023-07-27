import React from 'react';
import classes from './ButtonText.module.css';

const ButtonText = props => {
  return (
    <div
      onClick={() => {
        props.onClickHandler();
      }}
      className={`${classes.buttonAnimation} ${props.className}`}
    >
      <button
        id={props.id}
        className={classes.button}
        type="text"
        style={props.style}
      >
        {props.name}
      </button>
    </div>
  );
};

export default ButtonText;
