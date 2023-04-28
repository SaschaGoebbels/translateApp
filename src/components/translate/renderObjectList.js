import React, { useEffect, useState } from 'react';
import classes from './renderObjectList.module.css';

import HistoryItem from './historyItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faEquals } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useSelector } from 'react-redux';

const RenderObjectList = props => {
  const historyList = useSelector(state => state.historyList);

  // useEffect(() => {
  //   console.log('❌', historyList);
  // }, [historyList]);

  const icon = el => {
    switch (el) {
      case 'faLightbulb':
        return faLightbulb;
      case 'faHistory':
        return faHistory;
      default:
        break;
    }
  };

  const onTrashHandler = id => {
    console.log('❌ Trash', id);
  };
  const onFavHandler = id => {
    console.log('❌ Fav', id);
    console.log('✅ now', Date.now());
  };
  //==================================================================
  return (
    <div className={classes.divBox}>
      {/* history headline */}
      <div className={classes.iconTextBox}>
        <FontAwesomeIcon icon={icon(props.icon)} />
        <p>{props.name}</p>
      </div>
      {/* // history resultList================================================================== */}
      <ul>
        {historyList.map(el => {
          return (
            <HistoryItem
              el={el}
              key={el.id}
              onFavHandler={onFavHandler}
              onTrashHandler={onTrashHandler}
            ></HistoryItem>
          );
        })}
      </ul>
    </div>
  );
};

export default RenderObjectList;
