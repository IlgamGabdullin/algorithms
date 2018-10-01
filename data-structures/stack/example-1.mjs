import { Stack } from '../';

export const checkBracesBalance = (string) => {
  const bracesMap = {'}' : '{', ')' : '(', ']' : '['};
  const stack = new Stack();

  for (let i = 0; i < string.length; i++) {
    const item = string[i];
    if (!bracesMap[item]) {
      stack.push(item);
    } else {
      const poped = stack.pop();
      if (!poped && bracesMap[item] !== poped) {
        return false;
      }
    }
  }

  return !stack.size();
}