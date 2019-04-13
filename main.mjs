import { HashTable } from './data-structures/';

let ht = new HashTable();

ht.set('good', 'Good');
ht.set('bad', 'Bad');
ht.set('best', 'Best');
ht.set('normal', 'Normal');
ht.set('norm', 'Normal');
ht.set('enough', 'Enough');
ht.set('woman', 'are great');


console.log(ht);
console.log(ht.values());
console.log(ht.keys());