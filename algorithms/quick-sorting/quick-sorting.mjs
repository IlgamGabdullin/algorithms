import { exchange } from '../utils';

export const quickSorting = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) { 
    let idx = pivot(arr, left, right);
    quickSorting(arr, left, idx - 1);
    quickSorting(arr, idx + 1, right);
  }
  return arr;
}

export const pivot = (arr, startIdx = 0, endIdx = arr.length - 1) => {
  const pivot = arr[startIdx];
  let swapIdx = startIdx;

  for (let i = startIdx + 1; i <= endIdx; i++) {
    let current = arr[i];
    if (current < pivot) {
      swapIdx++;
      exchange(arr, swapIdx, i);
    }
  }
  exchange(arr, startIdx, swapIdx);
  return swapIdx;
}
