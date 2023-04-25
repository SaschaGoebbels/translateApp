import React, { useEffect, useState } from 'react';
import classes from './renderObjectList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faEquals } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useSelector } from 'react-redux';

const RenderObjectList = props => {
  const historyList = useSelector(state => state.historyList);
  // const [fav, setFav] = useState(false);

  useEffect(() => {
    console.log('❌', historyList);
  }, [historyList]);

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
            <li key={el.id} id={el.id} className={classes.listGridBox}>
              {/* if main lang result left else right */}
              <div id={'textBoxLeft'} className={classes.listItem}>
                {el.text1}
              </div>
              <div className={`${classes.listItem} ${classes.listItemIcon}`}>
                <FontAwesomeIcon icon={faEquals} />
              </div>
              <div id={'textBoxRight'} className={`${classes.listItem}`}>
                {el.text2}
              </div>
              <div className={`${classes.listItem} ${classes.listItemIcon}`}>
                <div
                  onClick={() => {
                    onTrashHandler(el.id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} className={classes.trash} />
                </div>
                <div
                  onClick={() => {
                    onFavHandler(el.id);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`${el.fav && classes.fav}`}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {/* <div className={classes.listBox}>{listContent}</div> */}
    </div>
  );
};

export default RenderObjectList;
