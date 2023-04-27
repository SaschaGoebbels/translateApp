import React, { useEffect, useState } from 'react';
import classes from './renderObjectList.module.css'; ///////////////// BOOKMARK ///////////////// B
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEquals } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// import { useSelector } from 'react-redux';

const HistoryItem = props => {
  const onTrashHandler = id => {
    console.log('❌ Trash', id);
    props.onTrashHandler(id);
  };
  const onFavHandler = id => {
    console.log('❌ Fav', id);
    console.log('✅ now', Date.now());
    props.onFavHandler(id);
  };
  //==================================================================
  return (
    <li key={props.id} id={props.id} className={classes.listGridBox}>
      <div id={'textBoxLeft'} className={classes.listItem}>
        {props.text1}
      </div>
      <div className={`${classes.listItem} ${classes.listItemIcon}`}>
        <FontAwesomeIcon icon={faEquals} />
      </div>
      <div id={'textBoxRight'} className={`${classes.listItem}`}>
        {props.text2}
      </div>
      <div className={`${classes.listItem} ${classes.listItemIcon}`}>
        <div
          onClick={() => {
            onTrashHandler(props.id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} className={classes.trash} />
        </div>
        <div
          onClick={() => {
            onFavHandler(props.id);
          }}
        >
          <FontAwesomeIcon
            icon={faStar}
            className={`${props.fav && classes.fav}`}
          />
        </div>
      </div>
    </li>
  );
};

export default HistoryItem;
