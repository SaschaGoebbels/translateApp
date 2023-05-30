import React, { useState, useEffect } from 'react';
import classes from './Menu.module.css';
//components
import ButtonRound from './ButtonRound';
import MenuItem from './MenuItem';
// import settingsBox from './SettingsBox.module.css';
// customHooks
import { useMenuHook } from '../../hooks/customHooks';

//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Menu = props => {
  // const { menuState, changeMenuState } = useMenuHook();
  const onMenuClickHandler = btnId => {
    console.log('✅', btnId);
  };
  const onLogoutHandler = () => {
    console.log('✅ logout');
  };
  //==================================================================
  // about
  // const aboutContent = (
  //   <div className={settingsBox.settingsBox}>
  //     <h2 className={settingsBox['settingsBox--h2']}>APP-Entwickler:</h2>
  //     <p
  //       className={settingsBox['settingsBox--p']}
  //       style={{ letterSpacing: '.1rem' }}
  //     >
  //       Sascha Göbbels
  //     </p>
  //     <p className={settingsBox['settingsBox--p']}>goebbels.sascha@gmail.com</p>
  //     <div className={classes.aboutIconBox}>
  //       <FontAwesomeIcon
  //         icon={faRocket}
  //         id={'rocket'}
  //         className={classes.aboutIcon}
  //         color={''}
  //       />
  //     </div>
  //   </div>
  // );
  //==================================================================
  //==================================================================
  return (
    <div
      className={`${classes.menuBox} ${
        !props.menuState && classes['menuBox--modal']
      }`}
    >
      <div
        className={`${classes.onClick} ${
          props.menuState && classes['onClick--hide']
        }`}
        onClick={() => props.closeMenu()}
      ></div>
      <div
        className={`${classes.menuBox__dropInBox} ${
          props.menuState && classes['menuBox__dropInBox--hide']
        }`}
      >
        <div className={classes.menuBox__UserBox} onClick={onLogoutHandler}>
          <div className={classes.menuBox__UserBtnBox}>
            <ButtonRound
              btnId="user"
              className={`${classes.buttonList} ${classes.buttonRight}`}
              buttonName={'user'}
              buttonSize={'large'}
              color={'#ffffff00'}
              borderColor={'#ffffff00'}
              shadow={'none'}
              iconColor={''}
              isFav={''}
              onClickHandler={onLogoutHandler}
            />
            <div>
              <p className={classes['menuBox__UserBox--userName']}>
                {props.userData.name}
              </p>
            </div>
          </div>
          <p>{props.userData.email}</p>
        </div>
        <div className={classes.menuBox__SettingsBox}>
          <MenuItem
            text={'settings'}
            icon={faGear}
            id={'gear'}
            onBtnClick={onMenuClickHandler}
          ></MenuItem>
          <MenuItem
            text={'user data'}
            icon={faUser}
            id={'user'}
            onBtnClick={onMenuClickHandler}
          ></MenuItem>
          <MenuItem
            text={'export data'}
            icon={faFileExport}
            id={'exp'}
            onBtnClick={onMenuClickHandler}
          ></MenuItem>
          <MenuItem
            text={'import data'}
            icon={faFileArrowDown}
            id={'get'}
            onBtnClick={onMenuClickHandler}
          ></MenuItem>
          <MenuItem
            text={'share'}
            icon={faShareNodes}
            id={'share'}
            onBtnClick={onMenuClickHandler}
          ></MenuItem>
          <MenuItem
            text={'about'}
            icon={faCircleQuestion}
            id={'quest'}
            onBtnClick={onMenuClickHandler}
          ></MenuItem>
        </div>
      </div>
    </div>
  );
};

export default Menu;
