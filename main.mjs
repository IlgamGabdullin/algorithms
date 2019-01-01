import { execute } from './execute';
import { radixSorting } from './algorithms';
import { SinglyLinkedList } from './data-structures';

let linkedList = new SinglyLinkedList();

linkedList.push('hi');
linkedList.push('there');
linkedList.push('you');
linkedList.push('!');

// console.log(linkedList);
console.log('last one: ', linkedList.pop());
console.log('last one: ', linkedList.pop());
console.log('last one: ', linkedList.pop());
console.log('last one: ', linkedList.pop());
console.log('last one: ', linkedList.pop());
