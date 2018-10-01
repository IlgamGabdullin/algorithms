import { execute } from './execute';
import { Stack } from './data-structures/';

export const countUniqueValues = (arr) => {
  let counter = 0;

  if (!arr.length) { return counter; }

  for (let i = 1; i < arr.length; i++) {
    if (arr[counter] !== arr[i]) {
      counter++;
      arr[counter] = arr[i];
    }
  }

  return counter + 1;
}

console.log(countUniqueValues([1, 1, 2, 3, 4, 4, 4, 4, 4, 5, 5, 5, 6]));
console.log(countUniqueValues([1, 1, 2]));