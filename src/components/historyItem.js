import React, { useEffect, useState } from 'react';
import classes from './historyItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEquals } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// import { useSelector } from 'react-redux';

const HistoryItem = props => {
  const onTrashHandler = id => {
    props.onTrashHandler(id);
  };
  const onFavHandler = id => {
    props.onFavHandler(id);
  };
  // console.log('✅', props.el);
  console.log('✅', props.el.id);
  //==================================================================
  return (
    <li key={props.el.id} id={props.el.id} className={classes.listGridBox}>
      <div id={'textBoxLeft'} className={classes.listItem}>
        {props.el.text1}
      </div>
      <div className={`${classes.listItem} ${classes.listItemIcon}`}>
        <FontAwesomeIcon icon={faEquals} />
      </div>
      <div id={'textBoxRight'} className={`${classes.listItem}`}>
        {props.el.text2}
      </div>
      <div className={`${classes.listItem} ${classes.listItemIcon}`}>
        <div
          onClick={() => {
            onTrashHandler(props.el.id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} className={classes.trash} />
        </div>
        <div
          onClick={() => {
            onFavHandler(props.el.id);
          }}
        >
          <FontAwesomeIcon
            icon={faStar}
            className={`${props.el.fav && classes.fav}`}
          />
        </div>
      </div>
    </li>
  );
};

export default HistoryItem;
