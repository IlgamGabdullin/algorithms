import { exchange } from '../utils';

export const bubbleSortOpt = (arr) => {
  let noSwaps;

  for (let i = arr.length; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        exchange(arr, j, j+1);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}