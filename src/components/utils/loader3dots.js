import React from 'react';
import classes from './loader3dots.module.css';

const Loader3dots = props => {
  return (
    <div className={''}>
      <div
        className={`${props.load && classes.loaderHide} ${classes.loader}`}
      ></div>
    </div>
  );
};

export default Loader3dots;
