export const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while ( left < right ) {
    const summ = arr[left] + arr[right];

    if (summ === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

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