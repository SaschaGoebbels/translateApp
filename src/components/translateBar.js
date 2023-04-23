import React, { useState, useEffect } from 'react';
import classes from './translateBar.module.css';
// components
import LanguageDoubleDropdown from './ui/languageDoubleDropdown';
import TextBox from './ui/textBox';
import { FetchToGoogle } from './logic/fetch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

import uuid from 'react-uuid';

const TranslateBar = props => {
  const [searchInputMainState, setSearchInputMainState] = useState('');
  const [searchInputSecondState, setSearchInputSecondState] = useState('');

  // get selected language from child component
  let mainLanguage = props.defaultLanguage[0];
  let secondLanguage = props.defaultLanguage[1];
  const getCurrentLanguage = state => {
    [mainLanguage, secondLanguage] = state;
  };
  ///////////////// BOOKMARK ///////////////// B
  const searchObj = (
    inputMain,
    inputSecond,
    setMain,
    setSecond,
    mainLanguage,
    secondLanguage,
    languageArray
  ) => {
    let sourceText, sourceLang, targetLang;
    sourceText = inputMain !== '' ? inputMain : inputSecond;
    sourceLang = inputMain !== '' ? mainLanguage : secondLanguage;
    targetLang = inputMain !== '' ? secondLanguage : mainLanguage;
    const setTarget = inputMain !== '' ? setSecond : setMain;
    const getLangCode = (language, languageArray) => {
      const currentLanguage = languageArray.filter(el => el.name === language);
      return currentLanguage[0].lang;
    };
    return {
      search: {
        sourceText,
        sourceLang: getLangCode(sourceLang, languageArray),
        targetLang: getLangCode(targetLang, languageArray),
      },
      setTarget,
    };
  };

  const textareaSizeInitial = [
    {
      id: 'mainSearchInput',
      size: 26,
      useBiggestSize: true,
      allowChangeText: true,
    },
    {
      id: 'secondSearchInput',
      size: 26,
      useBiggestSize: true,
      allowChangeText: true,
    },
  ];
  // const textareaSizeInitial = '26px';
  const [textareaSize, setTextareaSize] = useState(textareaSizeInitial);

  const textInput = (textValue, id, textareaSize) => {
    if (id === 'mainSearchInput') {
      setSearchInputMainState(textValue);
      setSearchInputSecondState('');
    }
    if (id === 'secondSearchInput') {
      setSearchInputSecondState(textValue);
      setSearchInputMainState('');
    }
  };
  // resize textarea if both inputs empty string
  useEffect(() => {
    if (searchInputMainState === '' && searchInputSecondState === '') {
      setTextareaSize(textareaSizeInitial);
      return;
    }
  }, [searchInputMainState, searchInputSecondState]);

  const onChangeTextareaSize = change => {
    setTextareaSize(prev => {
      prev
        .filter(el => el.id === change[0].id)
        .map(el => (el.size = change[0].size));
      return prev;
    });

    if (!change) {
      setTextareaSize(textareaSizeInitial);
    }
  };
  const handleKeyDown = e => {
    // tab to switch between input
    const activeTextarea = document.activeElement.id;
    if (e.code === 'Tab' && activeTextarea === 'secondSearchInput') {
      setTimeout(() => {
        document.getElementById('mainSearchInput').focus();
      }, 1);
    }
    // submit when pushing enter
    if (props.settings.submitEnter && e.key === 'Enter') {
      submitQuery();
    }
    // clear input if pushing escape
    if (props.settings.clearWithESC && e.key === 'Escape') {
      clearInput();
    }
  };
  const submitQuery = () => {
    props.onSubmitSearch({
      ...searchObj(
        searchInputMainState,
        searchInputSecondState,
        setSearchInputMainState,
        setSearchInputSecondState,
        mainLanguage,
        secondLanguage,
        props.languageArray
      ),
    });
  };
  const clearInput = () => {
    setSearchInputMainState('');
    setSearchInputSecondState('');
  };
  //==================================================================
  return (
    <div className={classes.translateBar_div}>
      <LanguageDoubleDropdown
        languageArray={props.languageArray}
        mainLanguage={'German'}
        secondLanguage={'English'}
        getCurrentLanguage={getCurrentLanguage}
      ></LanguageDoubleDropdown>
      <div className={classes.divBox} onKeyDown={handleKeyDown}>
        <TextBox
          autoFocus={true}
          onChange={textInput}
          id="mainSearchInput"
          value={searchInputMainState}
          onChangeTextareaSize={onChangeTextareaSize}
          textareaSize={textareaSize}
        ></TextBox>
        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
        <TextBox
          onChange={textInput}
          id="secondSearchInput"
          value={searchInputSecondState}
          onChangeTextareaSize={onChangeTextareaSize}
          textareaSize={textareaSize}
        ></TextBox>
      </div>
      <div className={classes.divBox}>
        <button className={classes.box} onClick={clearInput}>
          <FontAwesomeIcon icon={faX} /> clear
        </button>
        <button onClick={submitQuery} className={classes.box}>
          <FontAwesomeIcon icon={faSearch} /> search
        </button>
      </div>
    </div>
  );
};

export default TranslateBar;