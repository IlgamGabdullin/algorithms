const NS_PER_SEC = 1e9;

export const execute = (func, args, precise = false) => {

  if(!Array.isArray(args)) {
    throw ('args have to be array');
  }

  const before = precise ? process.hrtime() : Date.now();

  const result = func(...args);

  const executionTime = precise 
                          ? (process.hrtime(before)[0] + process.hrtime(before)[1] * 1e-6) 
                          : (Date.now() - before);

  console.log(`    result: ${result}
    execution time: ${executionTime} ms`);
}
