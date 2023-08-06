import React from 'react';
import classes from './Dropdown.module.css';

import ButtonText from '../ui/ButtonText';

const Dropdown = props => {
  //
  return (
    <div className={classes.dropdownBox}>
      <div>open list:</div>
      <ButtonText
        name={'favorites'}
        style={{ border: 'var(--clr_accent_blue) solid 2px' }}
        id={'favorites'}
        onClickHandler={'favorites'}
      ></ButtonText>
      <ButtonText
        name={'beginner 1'}
        style={{ border: 'var(--clr_accent_blue) solid 2px' }}
        id={'beginner1'}
        onClickHandler={'beginner 1'}
      ></ButtonText>
      <div>create list</div>
      <div>templates</div>
    </div>
  );
};

export default Dropdown;
