import React, { useState } from 'react';
// import classes from './languageDoubleDropdown.module.css';
import classesTranslateBar from './translateBar.module.css';
import LanguageDropdown from './languageDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const LanguageDoubleDropdown = props => {
  const [mainLanguageState, setMainLanguage] = useState(props.mainLanguage);
  const [secondLanguageState, setSecondLanguage] = useState(
    props.secondLanguage
  );
  const setLanguage = (id, value) => {
    if (id === 'mainLanguage') setMainLanguage(value);
    if (id === 'secondLanguage') setSecondLanguage(value);
  };
  useEffect(() => {
    props.getCurrentLanguage([mainLanguageState, secondLanguageState]);
  }, [mainLanguageState, secondLanguageState]);
  return (
    <div className={classesTranslateBar.divBox}>
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
  );
};

export default LanguageDoubleDropdown;
