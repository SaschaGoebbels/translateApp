import React from 'react';
import classes from './TranslateBar.module.css';

const TextBox = props => {
  //==================================================================
  let allowChangeText;
  // resize textarea on input change
  const getTextareaSize = array => {
    const [current] = array.filter(el => el.id === props.id);
    allowChangeText = current.allowChangeText;
    if (current.useBiggestSize) {
      // if use biggest return biggest number of array
      return `${Math.max(...array.map(el => el.size))}px`;
    }
    return `${current.size}px`;
  };
  const textareaSize = getTextareaSize(props.textareaSize);

  // get textarea size and update state in translateBar
  if (props.value !== '') {
    const tx = document.getElementsByTagName('textarea');
    for (let i = 0; i < tx.length; i++) {
      tx[i].addEventListener('input', OnInput, false);
    }
    function OnInput() {
      props.onChangeTextareaSize([
        { id: props.id, size: `${this.scrollHeight}` },
      ]);
    }
  }
  // if text change allowed update state in translateBar, else just print results
  const onChangeText = () => {
    if (allowChangeText) {
      props.onChange(
        document.querySelector(`#${props.id}`).value,
        props.id,
        textareaSize
      );
    }
  };
  const handleFocus = event => event.target.select();
  //==================================================================
  return (
    <textarea
      autoFocus={props.autoFocus}
      placeholder={props.placeholder}
      onChange={onChangeText}
      onFocus={handleFocus}
      style={{ height: textareaSize }}
      className={`${classes.box} ${classes.textareaInput} `}
      type="text"
      id={props.id}
      value={props.value}
    />
  );
};

export default TextBox;
