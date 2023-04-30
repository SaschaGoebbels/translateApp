import React from 'react';
import classes from './renderObjectList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

import ObjectListItem from './objectListItem';

import { useSelector, useDispatch } from 'react-redux';

// import { historyAddToLearn } from '../../actions/actions';
// import { historyDelete } from '../../actions/actions';

const RenderObjectList = props => {
  const array = props.array || [];

  // // // const onTrashHandler = id => {
  // // //   // dispatch(historyDelete(id));
  // // // };
  // // // const onFavHandler = id => {
  // // //   // dispatch(historyAddToLearn(id));
  // // // };
  const styles = { borderTop: `var(${props.borderColor}) solid 2px` };
  //==================================================================
  return (
    <div className={classes.divBox} style={styles}>
      <div className={classes.iconTextBox}>
        <FontAwesomeIcon icon={faHistory} />
        <p>{props.name}</p>
      </div>
      <ul>
        {array.map(el => {
          return (
            <ObjectListItem
              el={el}
              key={el.id}
              onFavHandler={props.onFavHandler}
              onTrashHandler={props.onTrashHandler}
              buttonShow={{ trash: true, fav: false, pen: true }}
              borderColor={props.borderColor}
            ></ObjectListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default RenderObjectList;
