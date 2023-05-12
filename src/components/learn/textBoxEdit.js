import React, { useState } from 'react';
import classes from './textBoxEdit.module.css';

const TextBoxEdit = props => {
  //==================================================================
  const [textareaSize, setTextareaSize] = useState('26px');

  // get textarea size and update state in translateBar
  if (props.value !== '') {
    const tx = document.getElementsByTagName('textarea');
    for (let i = 0; i < tx.length; i++) {
      tx[i].addEventListener('input', OnInput, false);
    }
    function OnInput() {
      const newSize = `${this.scrollHeight}px`;
      setTextareaSize(newSize);
      // console.log('✅', textareaSize);
    }
  }

  const onChangeText = () => {
    props.onChange(document.querySelector(`#${props.id}`).value, props.id);
  };
  //==================================================================
  return (
    <textarea
      autoFocus={props.autoFocus}
      onChange={onChangeText}
      style={{ height: textareaSize }}
      className={`${classes.box} ${classes.textareaInput} `}
      type="text"
      id={props.id}
      value={props.value}
    />
  );
};

export default TextBoxEdit;
