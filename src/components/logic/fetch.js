import uuid from 'react-uuid';

class Result {
  constructor(text1, language1, text2, language2, id) {
    this.text1 = text1;
    this.language1 = language1;
    this.text2 = text2;
    this.language2 = language2;
    this.id = id;
    this.fav = false;
    this.interval = 0;
    this.count = 0;
    this.timestamp = Date.now();
  }
}

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
    const text2 = body[0][0][0];
    const text1 = sourceText;

    const res = new Result(text1, targetLang, text2, sourceLang, uuid());
    obj.setTarget(res.text2);
    return res;
  }
  return;
};
