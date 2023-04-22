import React, { useState, useEffect } from 'react';
import classes from './translateBar.module.css';
// components
import LanguageDropdown from './ui/languageDropdown';
import TextBox from './ui/textBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

const langOrder = (languageArray, language) => {
  const languageOrder = languageArray.sort((a, b) => {
    return b.name !== language ? -1 : 0;
  });
  return languageOrder.map(el => (
    <option key={el.lang} value={el.lang}>
      {el.name}
    </option>
  ));
};
// const searchWord = document.querySelector('#input').value;

const TranslateBar = props => {
  const [searchInputMainState, setSearchInputMainState] = useState('');
  const [searchInputSecondState, setSearchInputSecondState] = useState('');
  const [mainLanguageState, setMainLanguage] = useState(props.mainLanguage);
  const [secondLanguageState, setSecondLanguage] = useState(
    props.secondaryLanguage
  );
  const textareaSizeInitial = '26px';
  const [textareaSize, setTextareaSize] = useState(textareaSizeInitial);
  const langArrayMain = langOrder(props.languageArray, props.mainLanguage);
  const langArraySecond = langOrder(
    props.languageArray,
    props.secondaryLanguage
  );
  const setLanguage = (id, value) => {
    console.log('❌', id, value);
  };
  const textInput = (textValue, id, textareaSize) => {
    if (id === 'mainSearchInput') {
      setSearchInputMainState(textValue);
      setSearchInputSecondState('');
    }
    if (id === 'secondSearchInput') {
      setSearchInputSecondState(textValue);
      setSearchInputMainState('');
    }
    setTextareaSize(textareaSize);
  };
  // resize textarea if both inputs empty string
  useEffect(() => {
    if (searchInputMainState === '' && searchInputSecondState === '') {
      setTextareaSize(textareaSizeInitial);
      return;
    }
  }, [searchInputMainState, searchInputSecondState]);
  //==================================================================
  return (
    <div className={classes.translateBar_div}>
      <div className={classes.divBox}>
        <LanguageDropdown
          id="mainLanguage"
          langArray={props.languageArray}
          language={mainLanguageState}
          onChange={setLanguage}
        ></LanguageDropdown>
        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
        <LanguageDropdown
          id="secondLanguage"
          langArray={props.languageArray}
          language={secondLanguageState}
          onChange={setLanguage}
        ></LanguageDropdown>
      </div>
      <div className={classes.divBox}>
        <TextBox
          onChange={textInput}
          id="mainSearchInput"
          value={searchInputMainState}
          textareaSize={textareaSize}
        ></TextBox>
        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
        <TextBox
          onChange={textInput}
          id="secondSearchInput"
          value={searchInputSecondState}
          textareaSize={textareaSize}
        ></TextBox>
      </div>
      <div className={classes.divBox}>
        <button
          className={classes.box}
          onClick={() => {
            console.log('❌ Clear Input State');
          }}
        >
          <FontAwesomeIcon icon={faX} /> clear
        </button>
        <button
          onClick={() => {
            props.onSubmitSearch(
              searchInputMainState,
              setSearchInputMainState,
              mainLanguageState,
              searchInputSecondState,
              setSearchInputSecondState,
              secondLanguageState
            );
          }}
          className={classes.box}
        >
          <FontAwesomeIcon icon={faSearch} /> search
        </button>
      </div>
    </div>
  );
};

export default TranslateBar;
