//
export const deleteFilteredId = (array, id) => {
  return array.filter(el => el.id !== id);
};

// export const newRound = array => {
//   const newRound = array.filter(el => el.count >= el.interval);
//   ///
// };
