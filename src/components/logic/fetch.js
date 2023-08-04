import uuid from 'react-uuid';
// import { proxy, useSnapshot } from 'valtio';
import { state } from '../../store/state';

class Result {
  constructor(text1, language1, text2, language2, id) {
    this.text1 = text1;
    this.language1 = language1;
    this.text2 = text2;
    this.language2 = language2;
    this.interval = 0;
    this.count = 0;
    this.id = id;
    this.fav = false;
    this.archived = false;
    this.timestamp = Date.now();
  }
}

export const FetchToGoogle = async obj => {
  state.loading = true;
  let response, body;
  const { sourceText, sourceLang, targetLang } = obj.search;
  // console.log('✅', obj.search);
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
  state.loading = false;
  if (body) {
    const text2 = body[0][0][0];
    const text1 = sourceText;

    // const res = new Result(text1, targetLang, text2, sourceLang, uuid());
    const res = new Result(text1, sourceLang, text2, targetLang, uuid());
    obj.setTarget(res.text2);
    return res;
  }
  return;
};
