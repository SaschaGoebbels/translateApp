//
export const saveLocalStorage = data => {
  // console.log('SAVE Data: ', data);
  localStorage.setItem('translateAndRepeat', JSON.stringify(data));
};

export const readLocalStorage = data => {
  return JSON.parse(localStorage.getItem('translateAndRepeat'));
};
