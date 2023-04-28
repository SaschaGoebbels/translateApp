import React from 'react';
import classes from './historyList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

import HistoryItem from './historyItem';

import { useSelector, useDispatch } from 'react-redux';

import { historyAddToLearn } from '../../actions/actions';
import { historyDelete } from '../../actions/actions';

const HistoryList = props => {
  const dispatch = useDispatch();
  const historyList = useSelector(state => state.appData.history.list);

  const onTrashHandler = id => {
    dispatch(historyDelete(id));
  };
  const onFavHandler = id => {
    dispatch(historyAddToLearn(id));
  };
  //==================================================================
  return (
    <div className={classes.divBox}>
      {/* history headline */}
      <div className={classes.iconTextBox}>
        <FontAwesomeIcon icon={faHistory} />
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

export default HistoryList;
