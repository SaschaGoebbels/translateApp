import React from 'react';
import classes from '../translateBar.module.css';

const TextBox = props => {
  return (
    <textarea
      onChange={() => {
        props.onChange(document.querySelector(`#${props.id}`).value);
      }}
      className={`${classes.box} ${classes.textareaInput}`}
      type="text"
      id={props.id}
      value={props.value}
    />
  );
};

export default TextBox;
