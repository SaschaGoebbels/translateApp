import React, { useEffect, useState } from 'react';
import classes from './renderObjectList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faEquals } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const result1 = [
  {
    lang: 'de',
    id: 'x1',
    words: [
      { text: 'Ein', lang: 'en', id: 'de1' },
      { text: 'Zwei', lang: 'en', id: 'de2' },
    ],
  },
  {
    lang: 'en',
    id: 'x2',
    words: [
      { text: 'One', lang: 'en', id: 'en1' },
      { text: 'Two', lang: 'en', id: 'en2' },
    ],
  },
];
const result2 = [
  {
    lang: 'de',
    id: 'x3',
    words: [
      { text: 'Hallo', lang: 'en', id: 'de3' },
      { text: 'Welt', lang: 'en', id: 'de4' },
    ],
  },
  {
    lang: 'en',
    id: 'x4',
    words: [
      { text: 'Hello', lang: 'en', id: 'en3' },
      { text: 'World', lang: 'en', id: 'en4' },
    ],
  },
];

const RenderObjectList = props => {
  const [selectedWord, setSelectedWord] = useState('');
  // const [list, setList] = useState(wordArrayTest);
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
  const eachWordToDiv = (array, selectedWord) => {
    // console.log('✅ Load', array);
    return array.map(el => {
      let select = selectedWord === el.id ? classes.wordSelected : '';
      return (
        <div id={el.id} onClick={wordClick} className={select}>
          {el.text}
        </div>
      );
    });
    //
  };
  const listContent = array => {
    // // render history
    // // take array of objects
    // // each obj div
    // // each word div
    console.log('✅', array);
    // eachWordToDiv(wordArrayTest, selectedWord);
    // if no array return immediately
    if (!array) return;
    //
    return array.map(el => {
      eachWordToDiv(el, selectedWord);
    });
  };
  const wordClick = el => {
    if (selectedWord === el.target.id) {
      console.log('❌');
      return;
    }
    setSelectedWord(el.target.id);
    console.log('✅', el.target.id);
  };
  // useEffect(() => {
  //   console.log('⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡');
  //   setList([...wordArrayTest]);
  // }, [selectedWord]);
  //==================================================================
  return (
    <div className={classes.divBox}>
      <div className={classes.iconTextBox}>
        <FontAwesomeIcon icon={icon(props.icon)} />
        <p>{props.name}</p>
      </div>
      <div className={classes.listGridBox}>
        {/* //================================================================== */}

        <div className={classes.listItem}>Word</div>

        <div className={`${classes.listItem} ${classes.listItemIcon}`}>
          <FontAwesomeIcon icon={faEquals} />
        </div>

        <div className={`${classes.listItem}`}>
          {/* //================================================================== */}
          {listContent([result1, result2])}
          {/* <div id={'1'} onClick={wordClick}>
            Wort
          </div>
          <div id={'2'} onClick={wordClick}>
            test
          </div>
          <div id={'3'} onClick={wordClick}>
            eins
          </div> */}
          {/* //================================================================== */}
        </div>
        <div className={`${classes.listItem} ${classes.listItemIcon}`}>
          <div>
            <FontAwesomeIcon icon={faTrash} className={classes.trash} />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faStar}
              className={'fav' && `${classes.fav}`}
            />
          </div>
        </div>
      </div>
      {/* <div className={classes.listBox}>{listContent}</div> */}
    </div>
  );
};

export default RenderObjectList;
