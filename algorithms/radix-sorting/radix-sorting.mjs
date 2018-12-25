export const radixSorting = (arr) => {
  const digits = mostDigits(arr);

  for (let i = 0; i < digits; i ++) {
    const buckets = Array.from({length: 10}, () => []);

    for(let k = 0; k < arr.length; k++) {
      const currentDigit = getDigit(arr[k], i);
      buckets[currentDigit].push(arr[k]);
    }
    arr = [].concat(...buckets);
  }

  return arr;
}

export const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

export const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

export const mostDigits = (nums) => {
  let maxDigits = 0;
  for(let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
