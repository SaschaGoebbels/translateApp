import React from 'react';
import classes from './RenderObjectList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHistory } from '@fortawesome/free-solid-svg-icons';

import ObjectListItem from './ObjectListItem';

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
  const border = { borderTop: `var(${props.borderColor}) solid 2px` };
  const pStyles = {
    background: `linear-gradient(to right, var(${props.gradientColor.left}) 0%, var(${props.gradientColor.right}) 100%)`,
    WebkitBackgroundClip: 'text',
    // webkitTextFillColor: 'transparent',
  };
  const iconColor = { color: `var(${props.gradientColor.left})` };
  //==================================================================
  return (
    <div className={classes.divBox} style={border}>
      <div className={classes.iconTextBox} style={iconColor}>
        <FontAwesomeIcon icon={props.icon} />
        <p style={pStyles}>{props.name}</p>
      </div>
      <ul>
        {array.map(el => {
          return (
            <ObjectListItem
              el={el}
              key={el.id}
              onClickHandler={props.onClickHandler}
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
