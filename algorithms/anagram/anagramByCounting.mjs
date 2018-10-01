export const anagramByCounting = (str1, str2) => {

  if (str1.length !== str2.length) return;

  const characters1 = {};
  const characters2 = {};

  for(let i = 0; i < str1.length; i++) {
    const current = characters1[str1[i]];

    characters1[str1[i]] = current ? current + 1 : 0
  }

  for(let i = 0; i < str2.length; i++) {
    const current = characters2[str2[i]];

    characters2[str2[i]] = current ? current + 1 : 0
  }

  let idx = 0;
  let isOk = true;

  while (idx < str1.length && isOk) {
    if (characters1[str1[idx]] === characters2[str2[idx]]) {
      idx += 1;
    } else {
      isOk = false;
    }
  }

  return isOk;
}

//
// another method by counting (with one object)
//
const anagram = (str1, str2) => {
  if (str1.length !== str2.length) { return false; }

  const characters = {};

  for (let i = 0; i < str1.length; i++) {
    const current = characters[str1[i]];

    characters[str1[i]] = current ? current + 1 : 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const current = characters[str2[i]];

    if (!current) { return false; }

    characters[str2[i]] = current - 1;
  }

  return true;
}