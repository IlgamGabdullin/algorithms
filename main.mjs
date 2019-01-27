import { execute } from './execute';
import { DoublyLinkedList } from './data-structures';


const list = new DoublyLinkedList();

list.push('val');
list.push(true);
list.push(23);
list.push('ypta');

console.log(list.get(2));