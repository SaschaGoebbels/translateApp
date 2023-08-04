import { FetchToGoogle } from './fetch';

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

export const fetchTemplates = async (listObj, targetLang) => {
  // if en is source language just fetch target language
  if (targetLang !== 'en') {
    console.log('✅', await readTemplatesListArray(listObj, targetLang));
  }
  // if source language is not en fetch target language and then again the source language
  return;
};

const readTemplatesListArray = async (listObj, targetLang) => {
  let resArray = [];

  await Promise.all(
    listObj.list.map(async el => {
      const res = await FetchToGoogle({
        search: {
          sourceText: el,
          sourceLang: listObj.lang,
          targetLang,
        },
        setTarget: text => {},
      });
      resArray = [...resArray, res];
    })
  );
  return resArray;
};
