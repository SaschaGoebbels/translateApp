import { FetchToGoogle } from './fetch';

const searchObj = {
  search: {
    sourceText: 'Bitte diesen text übersetzen',
    sourceLang: 'de',
    targetLang: 'en',
  },
  setTarget: text => {
    // not needed just to match expect format of search obj
  },
};

export const fetchTemplates = async (listObj, targetLang, sourceLang) => {
  // // // if source language is not en fetch target language and then again the source language
  if (sourceLang !== 'en') {
    const resTwice = await fetchTwice(listObj, targetLang, sourceLang);
    console.log('✅ TWICE', resTwice);
    return;
  }
  // // // if en is source language just fetch target language
  if (sourceLang === 'en') {
    const resSourceEn = await readTemplatesListArray(listObj, targetLang);
    console.log('✅ source en', resSourceEn);
    return;
  }
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

const fetchTwice = async (listObj, targetLang, sourceLang) => {
  const res1 = await readTemplatesListArray(listObj, sourceLang);
  const fetchedSourceLangList = res1.map(el => {
    return el.text2;
  });
  const listObjFetchedSourceLang = {
    listName: listObj.listName,
    lang: sourceLang,
    list: fetchedSourceLangList,
  };
  const res2 = await readTemplatesListArray(
    listObjFetchedSourceLang,
    targetLang
  );
  return res2;
};
