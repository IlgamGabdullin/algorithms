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

export const countUniqueValue = (arr) => {
  
}