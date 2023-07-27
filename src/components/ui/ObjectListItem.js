import React from 'react';
import classes from './ObjectListItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEquals } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const ObjectListItem = props => {
  const onClickHandler = (button, id) => {
    props.onClickHandler(button, id);
  };

  //==================================================================
  const styles = { borderBottom: `var(${props.borderColor}) dotted 2px` };
  //==================================================================
  return (
    <li
      key={props.el.id}
      id={props.el.id}
      className={classes.listGridBox}
      style={styles}
    >
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
        {props.buttonShow.trash && (
          <div
            onClick={() => {
              onClickHandler('trash', props.el.id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} className={classes.trash} />
          </div>
        )}
        {props.buttonShow.fav && (
          <div
            onClick={() => {
              onClickHandler('fav', props.el.id);
            }}
          >
            <FontAwesomeIcon
              icon={faStar}
              className={`${props.el.fav && classes.fav}`}
            />
          </div>
        )}
        {props.buttonShow.pen && (
          <div
            onClick={() => {
              onClickHandler('pen', props.el.id);
            }}
          >
            <FontAwesomeIcon icon={faPenToSquare} className={`${''}`} />
          </div>
        )}
      </div>
    </li>
  );
};

export default ObjectListItem;
