import React from 'react';
import classes from '../translateBar.module.css';

const TextBox = props => {
  //==================================================================
  // resize textarea on input change
  let textareaSize = props.textareaSize;
  if (props.value !== '') {
    const tx = document.getElementsByTagName('textarea');
    for (let i = 0; i < tx.length; i++) {
      tx[i].addEventListener('input', OnInput, false);
    }
    function OnInput() {
      textareaSize = this.scrollHeight + 'px';
    }
  }
  //==================================================================
  return (
    <textarea
      onChange={() => {
        props.onChange(
          document.querySelector(`#${props.id}`).value,
          props.id,
          textareaSize
        );
      }}
      style={{ height: textareaSize }}
      className={`${classes.box} ${classes.textareaInput} `}
      type="text"
      id={props.id}
      value={props.value}
    />
  );
};

export default TextBox;
