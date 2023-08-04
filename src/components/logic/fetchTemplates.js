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

export const fetchTemplates = async (listObj, targetLang, sourceLang) => {
  // if source language is not en fetch target language and then again the source language
  // // if (sourceLang !== 'en') {
  // //   const resTwice = await fetchTwice(listObj, targetLang, sourceLang);
  // // }
  // if en is source language just fetch target language
  if (sourceLang === 'en') {
    const resSourceEn = await readTemplatesListArray(listObj, targetLang);
    // console.log('✅', resSourceEn);
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
  console.log('✅', resArray);
  return resArray;
};

// // const fetchTwice = async (listObj, targetLang, sourceLang) => {
// //   console.log('✅', targetLang, sourceLang);
// //   const res1 = await readTemplatesListArray(listObj, sourceLang);
// //   // let fetchedSourceLangArray;
// //   const fetchedSourceLangList = res1.map(el => {
// //     return el.text2;
// //   });
// //   const listObjFetchedSourceLang = {
// //     listName: listObj.listName,
// //     lang: targetLang,
// //     list: fetchedSourceLangList,
// //   };
// //   console.log('✅', res1, listObjFetchedSourceLang);
// //   const res2 = await readTemplatesListArray(
// //     listObjFetchedSourceLang,
// //     targetLang
// //   );
// //   console.log('✅', res1);
// //   return res2;
// // };
