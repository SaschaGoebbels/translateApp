//

export const createNewRound = (array, intervalObject) => {
  if (array.length === 0) return [];
  let newRound = [];
  let maxDistance = 0;
  // check interval <= count, push object to array
  while (newRound.length === 0) {
    const temp = array.filter(
      el => intervalObject[el.interval] <= el.count + maxDistance
    );
    newRound = temp;
    maxDistance += 1;
  }
  return newRound;
};
