// import React from 'react';

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
    const result = [
      { text: body[0][0][0], language: targetLang },
      {
        text: sourceText,
        language: sourceLang,
      },
    ];
    obj.setTarget(result[0].text);
  }
  return;
};
