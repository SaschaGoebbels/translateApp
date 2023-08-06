import React from 'react';
import and from '../../files/and.svg';
import classes from './Header.module.css';

//valtio
import { useSnapshot } from 'valtio';
import { state } from '../../store/state';

const Header = props => {
  const snap = useSnapshot(state);
  const onClickHandler = el => {
    if (el.target.id === 'translate') {
      state.translate = true;
    }
    if (el.target.id === 'learn') {
      state.translate = false;
    }
  };

  return (
    <header className={classes.header}>
      <div
        className={`${classes.headline}  ${
          !snap.translate && classes['headline--clr']
        }`}
      >
        <h1
          onClick={onClickHandler}
          className={classes.h1Left}
          id={'translate'}
        >
          translate
        </h1>
        <img src={and} className={classes.andSymbol} alt="&" />
        <h1 onClick={onClickHandler} className={classes.h1Right} id={'learn'}>
          repeat
        </h1>
      </div>
    </header>
  );
};

export default Header;
