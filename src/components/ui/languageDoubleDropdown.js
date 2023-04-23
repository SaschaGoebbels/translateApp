import React, { useState } from 'react';
// import classes from './languageDoubleDropdown.module.css';
import classesTranslateBar from '../translateBar.module.css';
import LanguageDropdown from './languageDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

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

const LanguageDoubleDropdown = props => {
  const [mainLanguageState, setMainLanguage] = useState(props.mainLanguage);
  const [secondLanguageState, setSecondLanguage] = useState(
    props.secondLanguage
  );

  const langArrayMain = langOrder(props.languageArray, props.mainLanguage);
  const langArraySecond = langOrder(
    props.languageArray,
    props.secondaryLanguage
  );

  const setLanguage = (id, value) => {
    if (id === 'mainLanguage') setMainLanguage(value);
    if (id === 'secondLanguage') setMainLanguage(value);
  };
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
