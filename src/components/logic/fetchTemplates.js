import { FetchToGoogle } from './fetch';
import beginner from '../../files/templates/beginner.json';

const searchObj = {
  search: {
    sourceText: 'Bitte diesen text übersetzen',
    sourceLang: 'de',
    targetLang: 'en',
  },
  setTarget: text => {
    console.log('✅', text);
  },
};

export const fetchTemplates = async (list, lang1, lang2) => {
  console.log('✅', 'fetch', list, lang1, lang2);

  const res = await FetchToGoogle(searchObj);
  console.log('✅', res);
  // // if (res) dispatch(historyListAdd({ ...res }));
  return;
};
