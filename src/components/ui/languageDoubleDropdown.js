import React from 'react';
import classes from './languageDoubleDropdown.module.css';
import LanguageDropdown from './languageDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

const LanguageDoubleDropdown = props => {
  const [mainLanguageState, setMainLanguage] = useState(props.mainLanguage);
  const [secondLanguageState, setSecondLanguage] = useState(
    props.secondaryLanguage
  );
  const setLanguage = (id, value) => {
    if (id === 'mainLanguage') setMainLanguage(value);
    if (id === 'secondLanguage') setMainLanguage(value);
    console.log('❌', id, value);
  };
  return (
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
  );
};

export default LanguageDoubleDropdown;
