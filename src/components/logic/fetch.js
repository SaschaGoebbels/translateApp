// import React from 'react';

export const FetchToGoogle = async obj => {
  const { sourceText, sourceLang, targetLang } = obj.search;
  const { setMain, setSecond } = obj.set;
  console.log('✅', sourceText, sourceLang, targetLang);
  ///////////////// BOOKMARK ///////////////// B
  // let sourceText = '';
  // if (e.parameter.q) {
  //   sourceText = e.parameter.q;
  // }

  // let sourceLang = 'auto';
  // if (e.parameter.source) {
  //   sourceLang = e.parameter.source;
  // }

  // let targetLang = 'de';
  // if (e.parameter.target) {
  //   targetLang = e.parameter.target;
  // }
  // let resUrl;
  const url =
    'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' +
    sourceLang +
    '&tl=' +
    targetLang +
    '&dt=t&q=' +
    encodeURI(sourceText);

  console.log('✅', url);
  const response = await fetch(url);
  const body = await response.json();

  console.log('✅ Body:', body);
  console.log('💥 Translation:', body[0][0][0]);
  console.log('👍 source language:', body[2]);

  return;
};
