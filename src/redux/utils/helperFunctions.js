//
export const deleteFilteredId = (array, id) => {
  return array.filter(el => el.id !== id);
};
