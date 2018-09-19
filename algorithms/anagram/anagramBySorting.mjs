export const anagramBySorting = (str1, str2) => {
  const list1Sorted = str1.split('').sort();
  const list2Sorted = str2.split('').sort();

  return list1Sorted.join('') === list2Sorted.join('');
}
