import React from 'react';
import classes from './TranslateBar.module.css';

const LanguageDropdown = props => {
  // sort current language to the top
  const langOrder = (languageArray, language) => {
    const languageOrder = languageArray.sort((a, b) => {
      return b.name !== language ? -1 : 0;
    });
    return languageOrder.map(el => (
      <option key={el.lang} value={el.name}>
        {el.name}
      </option>
    ));
  };
  return (
    <select
      onChange={() =>
        props.onChange(props.id, document.querySelector(`#${props.id}`).value)
      }
      className={`${classes.box} ${classes.inputField}`}
      name="language"
      id={props.id}
    >
      {langOrder([...props.langArray], props.language)}
    </select>
  );
};

export default LanguageDropdown;
