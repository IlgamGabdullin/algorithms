import { PriorityQueue } from './data-structures/';

let queue = new PriorityQueue();

console.log(queue);

queue.enqueue('yo', 13);
queue.enqueue('sup', 4);
queue.enqueue('йца', 6);
queue.enqueue('ыуа', 132);
queue.enqueue('мфы', 43);

console.log(queue);

console.log(queue.dequeue())
console.log(queue.dequeue())
