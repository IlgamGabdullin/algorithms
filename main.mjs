import { execute } from './execute';
import { DoublyLinkedList } from './data-structures';


const list = new DoublyLinkedList();

list.push('val');
list.push(true);

console.log(list.pop());