import react, { useState } from 'react';

import classes from './ModalBlur.module.css';

const ModalBlur = props => {
  return (
    <div
      className={`${classes.modalBox} ${classes.modalBoxAnimation}`}
      // //   ${
      //     //   props.showModal &&
      //     classes.modalHide
      //   }`}
      //   onClick={() => {
      //     props.SetShowModal(false);
      //   }}
    ></div>
  );
};

export default ModalBlur;
