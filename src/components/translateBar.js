import React, { useState } from 'react';
import classes from './translateBar.module.css';
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
  const [searchInputState, setSearchInputState] = useState('');
  const [mainLanguageState, setMainLanguage] = useState(props.mainLanguage);
  const [secondaryLanguageState, setSecondaryLanguage] = useState(
    props.secondaryLanguage
  );
  const langArrayMain = langOrder(props.languageArray, props.mainLanguage);
  const langArraySecond = langOrder(
    props.languageArray,
    props.secondaryLanguage
  );
  // const langArray = langOrder(props.languageArray, props.defaultLanguage);
  const selectLang = () => {
    setMainLanguage(document.querySelector('#dropdown_mainLanguage').value);
    setSecondaryLanguage(
      document.querySelector('#dropdown_secondaryLanguage').value
    );
    // setLangState(document.querySelector('#dropdown_language').value);
  };
  return (
    <div className={classes.translateBar_div}>
      <div className={classes.divBox}>
        <select
          onChange={selectLang}
          className={`${classes.box} ${classes.inputField}`}
          name="language"
          id="dropdown_mainLanguage"
        >
          {langArrayMain}
        </select>
        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
        <select
          onChange={selectLang}
          className={`${classes.box} ${classes.inputField}`}
          name="language"
          id="dropdown_secondaryLanguage"
        >
          {langArraySecond}
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
              setSearchInputState
              // langState ///////////////// BOOKMARK ///////////////// B
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
              setSearchInputState
              // langState ///////////////// BOOKMARK ///////////////// B
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
