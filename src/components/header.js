import React from 'react';
import and from '../and.svg';
import classes from './header.module.css';

const Header = props => {
  //
  return (
    <header className={classes.header}>
      <div className={classes.headline}>
        <h1 className={classes.h1Left}>translate</h1>
        <img src={and} className={classes.andSymbol} alt="&" />
        <h1 className={classes.h1Right}>repeat</h1>
      </div>
    </header>
  );
};

export default Header;
