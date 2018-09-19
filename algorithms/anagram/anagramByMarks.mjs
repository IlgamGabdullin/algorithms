export const anagramByMarks = (str1, str2) => {
  const str2AsArray = str2.split('');
  let pos1 = 0;
  let isOk = true;

  while (pos1 < str1.length && isOk) {
    let pos2 = 0;
    let found = false;

    while (pos2 < str2AsArray.length && !found) {
      if (str1[pos1] === str2AsArray[pos2]) {
        found = true
      } else {
        pos2 += 1;
      }
    }

    if (found) {
      str2AsArray[pos2] = null;
    } else {
      isOk = false;
    }

    pos1 += 1;
  }

  return isOk;
}
