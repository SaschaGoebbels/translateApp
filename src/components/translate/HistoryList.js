import React, { useState } from 'react';
import classes from './HistoryList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

import HistoryItem from './HistoryItem';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { historyFavSwitch, historyDelete } from '../../redux/translateSlice';
import { addOrRemoveByHistoryList } from '../../redux/learnSlice';
import { useEffect } from 'react';

const HistoryList = props => {
  const dispatch = useDispatch();
  const historyListRedux = useSelector(state => state.translate.history.list);
  const Redux = useSelector(state => state.translate);
  const [historyList, setHistoryList] = useState(historyListRedux);

  useEffect(() => {
    // console.log('❌ effect', historyListRedux);
    // console.log('✅', Redux);
    setHistoryList(historyListRedux);
  }, [historyListRedux]);

  const itemFilteredId = (id, array) => {
    return array.filter(el => el.id === id)[0];
  };
  const onTrashHandler = id => {
    props.setModalStateInsideComponent({
      message: 'delete this item ?',
      title: 'caution',
      trash: deleteHistoryItem,
      hideModalBox: false,
      showBtnTrash: true,
      showBtnX: true,
      showBtnCheck: false,
      value: id,
    });
  };
  const deleteHistoryItem = id => {
    dispatch(historyDelete({ id }));
  };

  const onFavHandler = id => {
    const item = itemFilteredId(id, historyList);
    // if fav ask to delete from learnList
    if (item.fav === true) {
      props.setModalStateInsideComponent({
        message:
          "this item will be removed from the learn list ! you lose the current interval count ! optional you can delete it from history this doesn't effect the learn list.",
        title: 'caution',
        confirm: favHandler,
        hideModalBox: false,
        showBtnX: true,
        showBtnCheck: true,
        value: id,
      });
      return;
    }
    // add to favList
    favHandler(id);
  };
  const favHandler = id => {
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
