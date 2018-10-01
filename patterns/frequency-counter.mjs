export const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) { return false; }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let i = 0; i < arr1.length; i++) {
    frequencyCounter1[arr1[i]] = (frequencyCounter1[arr1[i]] || 0) + 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    frequencyCounter2[arr2[i]] = (frequencyCounter2[arr2[i]] || 0) + 1;
  }

  for (let i in frequencyCounter1) {
    if (!(i ** 2 in frequencyCounter2)) { return false; }

    if (frequencyCounter1[i ** 2] !== frequencyCounter2[i]) {
      return false;
    }
  }

  return true;
}
