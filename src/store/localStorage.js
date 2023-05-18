//
export const saveLocalStorageByKey = (key, data) => {
  // console.log('SAVE Data: ', data);
  localStorage.setItem(key, JSON.stringify(data));
};

export const readLocalStorageByKey = key => {
  // console.log('😁', key, ': ', JSON.parse(localStorage.getItem(key)));
  return JSON.parse(localStorage.getItem(key));
};
