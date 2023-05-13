import React, { useState, useEffect } from 'react';
import classes from './translateBar.module.css';
// components
import LanguageDoubleDropdown from './languageDoubleDropdown';
import TextBox from './textBox';
import Loader3dots from '../utils/loader3dots';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
//valtio
import { useSnapshot } from 'valtio';
import { state } from '../../store/state';

const TranslateBar = props => {
  const snap = useSnapshot(state);
  const [searchInputMainState, setSearchInputMainState] = useState('');
  const [searchInputSecondState, setSearchInputSecondState] = useState('');

  // get selected language from child component
  let mainLanguage = props.defaultLanguage[0].name;
  let secondLanguage = props.defaultLanguage[1].name;
  const getCurrentLanguage = state => {
    [mainLanguage, secondLanguage] = state;
  };

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
    // console.log('✅', e.key);
    if (snap.translate === false) return;
    // tab to switch between input
    const activeTextarea = document.activeElement.id;
    if (e.code === 'Tab' && activeTextarea === 'secondSearchInput') {
      setTimeout(() => {
        document.getElementById('mainSearchInput').focus();
      }, 1);
    }
    // submit when pushing enter
    if (props.settings.submitEnter && e.key === 'Enter') {
      e.preventDefault();
      submitQuery();
    }
    // clear input if pushing escape
    if (props.settings.clearWithESC && e.key === 'Escape') {
      clearInput();
    }
    if (e.ctrlKey && e.key === 's') {
      // Prevent the Save dialog to open
      e.preventDefault();
      console.log('save as Fav');
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
          autoFocus={props.loading}
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
          <FontAwesomeIcon icon={faX} /> esc
        </button>
        <Loader3dots load={props.loading}></Loader3dots>
        <button onClick={submitQuery} className={classes.box}>
          <FontAwesomeIcon icon={faSearch} /> enter
        </button>
      </div>
    </div>
  );
};

export default TranslateBar;
