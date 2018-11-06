export let binarySearch = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (value < arr[middle]) {
      right = middle - 1;
    } else if (value > arr[middle]) {
      left = middle + 1;
    } else if (value === arr[middle]) {
      return middle;
    }
  }

  return -1;
}