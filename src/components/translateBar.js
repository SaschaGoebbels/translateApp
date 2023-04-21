import React, { useState } from 'react';
import classes from './translateBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

const langOrder = (languageArray, defaultLanguage) => {
  const languageOrder = languageArray.sort((a, b) => {
    return b.name !== defaultLanguage ? -1 : 0;
  });
  return languageOrder.map(el => (
    <option key={el.lang} value={el.lang}>
      {el.name}
    </option>
  ));
};
// const searchWord = document.querySelector('#input').value;

const TranslateBar = props => {
  const [searchInputState, setSearchInputState] = useState('');
  const [langState, setLangState] = useState('');
  const langArray = langOrder(props.languageArray, props.defaultLanguage);
  const selectLang = () => {
    setLangState(document.querySelector('#dropdown_language').value);
  };
  return (
    <div className={classes.translateBar_div}>
      <div className={classes.divBox}>
        <select
          onChange={selectLang}
          className={`${classes.box} ${classes.inputField}`}
          name="language"
          id="dropdown_language"
        >
          {langArray}
        </select>
        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
        <select
          onChange={selectLang}
          className={`${classes.box} ${classes.inputField}`}
          name="language"
          id="dropdown_language"
        >
          {langArray}
        </select>
      </div>
      <div className={classes.divBox}>
        <input
          onChange={() => {
            setSearchInputState(document.querySelector('#searchInput').value);
          }}
          className={`${classes.box} ${classes.inputField}`}
          type="text"
          id="searchInput"
          value={searchInputState}
        />
        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
        <input
          onChange={() => {
            setSearchInputState(document.querySelector('#searchInput').value);
          }}
          className={`${classes.box} ${classes.inputField}`}
          type="text"
          id="searchInput"
          value={searchInputState}
        />
      </div>
      <div className={classes.divBox}>
        <button
          className={classes.box}
          onClick={() => {
            props.onSubmitSearch(
              searchInputState,
              setSearchInputState,
              langState
            );
          }}
        >
          <FontAwesomeIcon icon={faX} /> clear
        </button>
        <button
          className={classes.box}
          onClick={() => {
            props.onSubmitSearch(
              searchInputState,
              setSearchInputState,
              langState
            );
          }}
        >
          <FontAwesomeIcon icon={faSearch} /> search
        </button>
      </div>
    </div>
  );
};

export default TranslateBar;
