## Anagram (three methods)

Code for checking (paste this to /main.js file)

```js

import { anagramByCounting } from './algorithms/';
import { anagramBySorting } from './algorithms/';
import { anagramByMarks } from './algorithms/';


console.log('\nBy Marks:');
execute(anagramByMarks, ['lkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjhef', 'lkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjhef'], true);

console.log('\nBy Sorting:');
execute(anagramBySorting, ['lkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjhef', 'lkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjhef'], true);

console.log('\nBy Counting:');
execute(anagramByCounting, ['lkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjhef', 'lkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjheflkshefbbsjhbefsjhef'], true);

```