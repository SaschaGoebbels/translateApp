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
  if (targetLang !== 'en') {
    console.log('✅', readTemplatesListArray(listObj, targetLang));
  }
  // console.log('✅', 'fetch', listObj, targetLang);

  // const res = await FetchToGoogle(searchObj);
  // console.log('✅', res);
  // // if (res) dispatch(historyListAdd({ ...res }));
  return;
};

const readTemplatesListArray = async (listObj, targetLang) => {
  // console.log('✅', listObj, targetLang);
  let resArray = [];

  // // await listObj.list.forEach(async element => {
  // //   const res = await FetchToGoogle({
  // //     search: {
  // //       sourceText: element,
  // //       sourceLang: listObj.lang,
  // //       targetLang,
  // //     },
  // //     setTarget: text => {},
  // //   });
  // //   resArray = [...resArray, res];
  // // });
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
};
