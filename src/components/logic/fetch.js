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

export const FetchToGoogle = async obj => {
  let response, body;
  const { sourceText, sourceLang, targetLang } = obj.search;

  const url =
    'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' +
    sourceLang +
    '&tl=' +
    targetLang +
    '&dt=t&q=' +
    encodeURI(sourceText);
  try {
    response = await fetch(url);
    body = await response.json();
  } catch (err) {
    console.log('❌ Fetch Error:', err);
  }
  if (body) {
    const res = new Result(
      body[0][0][0],
      targetLang,
      sourceText,
      sourceLang,
      uuid()
    );
    console.log('❌', res);

    obj.setTarget(res.text1);
  }
  return;
};
