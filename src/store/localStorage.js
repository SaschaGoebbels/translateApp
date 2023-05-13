//
// export const saveLocalStorage = data => {
//   // console.log('SAVE Data: ', data);
//   localStorage.setItem('translateAndRepeat', JSON.stringify(data));
// };

// export const readLocalStorage = data => {
//   console.log('✅', data,);
//   return JSON.parse(localStorage.getItem('translateAndRepeat'));
// };

export const saveLocalStorageByKey = (key, data) => {
  // console.log('SAVE Data: ', data);
  localStorage.setItem(key, JSON.stringify(data));
};

export const readLocalStorageByKey = key => {
  console.log('😁', key, ': ', JSON.parse(localStorage.getItem(key)));
  return JSON.parse(localStorage.getItem(key));
};
