import { Stack } from './stack';

export const infixToPostfix = (infixExpr) => {
  const prec = {
    '*': 3,
    '/': 3,
    '+': 2,
    '-': 2,
    '(': 1
  };

  const opstack = new Stack();
  const postfixList = [];
  const tokenList = infixExpr.split(' ');

  for (let token of tokenList) {
    if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(token) || '0123456789'.includes(token)) {
      postfixList.push(token);
    } else if (token === '(') {
      opstack.push(token);
    } else if (token === ')') {
      let topToken = opstack.pop();
      while (topToken !== '(') {
        postfixList.push(token);
        topToken = opstack.pop();
      }
    } else {
      while (!opstack.isEmpty() && prec[opstack.peek()] >= prec[token]) {
        postfixList.push(opstack.pop());
      }
      opstack.push(token);
    }
  }

  while(!opstack.isEmpty()) {
    postfixList.push(opstack.pop());
  }

  return postfixList.join(' ');
}