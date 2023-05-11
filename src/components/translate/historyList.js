import React from 'react';
import classes from './historyList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

import HistoryItem from './historyItem';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { historyFavSwitch, historyDelete } from '../../redux/translateSlice';
import { addOrRemoveByHistoryList } from '../../redux/learnSlice';

const HistoryList = props => {
  const dispatch = useDispatch();
  const historyList = useSelector(state => state.translate.history.list);

  const itemFilteredId = (id, array) => {
    return array.filter(el => el.id === id)[0];
  };
  const onTrashHandler = id => {
    console.log('✅');
    dispatch(historyDelete({ id }));
  };

  const onFavHandler = id => {
    dispatch(historyFavSwitch({ id }));
    dispatch(
      addOrRemoveByHistoryList({ item: itemFilteredId(id, historyList) })
    );
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
