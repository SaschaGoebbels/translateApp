import React, { useState } from 'react';
import classes from './translateBar.module.css';

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
      <div className={classes.input_div}>
        <input
          onChange={() => {
            setSearchInputState(document.querySelector('#searchInput').value);
          }}
          className={classes.box}
          type="text"
          id="searchInput"
          value={searchInputState}
        />
        <select
          onChange={selectLang}
          className={classes.sourceLang}
          name="language"
          id="dropdown_language"
        >
          <option
            key={'1'}
            value={''}
            className={classes.sourceLang__withe}
            // className={classes['sourceLang--withe']}
          ></option>
          {langArray}
        </select>
      </div>
      <p>to</p>
      <select
        onChange={selectLang}
        className={classes.box}
        name="language"
        id="dropdown_language"
      >
        {langArray}
      </select>
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
        GO
      </button>
    </div>
  );
};

export default TranslateBar;
