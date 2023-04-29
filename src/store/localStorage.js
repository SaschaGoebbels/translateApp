//
export const saveLocalStorage = data => {
  localStorage.setItem('translateAndRepeat', JSON.stringify(data));
};

export const readLocalStorage = data => {
  return JSON.parse(localStorage.getItem('translateAndRepeat'));
};
