import React from 'react';
import classes from './MenuItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItem = props => {
  const buttonColor = props.color || '#69b7f3';
  const buttonIconColor = props.iconColor || '#69b7f3';

  return (
    <div
      className={classes.menuItemBox}
      onClick={() => {
        props.onBtnClick(props.id);
      }}
    >
      <div className={classes.menuItemBox__icon}>
        {' '}
        <FontAwesomeIcon
          icon={props.icon}
          id={props.id}
          className={classes.menuIcon}
          color={buttonIconColor}
        />
      </div>
      <p className={classes.menuItemBox__text}>{props.text}</p>
    </div>
  );
};

export default MenuItem;
