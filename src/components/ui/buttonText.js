import React from 'react';
import classes from './buttonText.module.css';

const ButtonText = props => {
  return (
    <div className={`${classes.buttonAnimation} ${props.className}`}>
      <button
        id={props.id}
        className={classes.button}
        onClick={() => {
          props.onClickHandler(props.id);
        }}
        type="text"
        style={props.style}
      >
        {props.name}
      </button>
    </div>
  );
};

export default ButtonText;
