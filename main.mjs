import { execute } from './execute';
import { DoublyLinkedList } from './data-structures';


const list = new DoublyLinkedList();

list.push('val');
list.push(true);
list.push(23);
list.push('ypta');

list.print();

list.insert(2, 'third element');

list.print();

list.remove(3);

list.print();