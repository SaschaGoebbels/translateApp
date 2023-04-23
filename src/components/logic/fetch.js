// import React from 'react';

import uuid from 'react-uuid';

class Result {
  constructor(text1, language1, text2, language2, id) {
    this.text1 = text1;
    this.language1 = language1;
    this.text2 = text2;
    this.language2 = language2;
    this.id = id;
    this.fav = false;
    this.interval = 1;
    this.count = 0;
  }
}
const splitStringToArray = text => {
  return text.split(' ');
};

export const FetchToGoogle = async obj => {
  let response, body;
  const { sourceText, sourceLang, targetLang } = obj.search;
  const noSpecialCharacters = sourceText.replace(/[^\w\s]/gi, '');
  const url =
    'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' +
    sourceLang +
    '&tl=' +
    targetLang +
    '&dt=t&q=' +
    encodeURI(noSpecialCharacters);
  try {
    response = await fetch(url);
    body = await response.json();
  } catch (err) {
    console.log('❌ Fetch Error:', err);
  }
  if (body) {
    const text1Array = splitStringToArray(body[0][0][0]);
    const text2Array = splitStringToArray(sourceText);

    const res = new Result(
      text1Array,
      targetLang,
      text2Array,
      sourceLang,
      uuid()
    );
    obj.setTarget(res.text1.join(' '));
    return res;
  }
  return;
};
