import { Graph } from './data-structures/';

let graph = new Graph();

graph.addVertex('Tokyo');
graph.addVertex('Japan');
graph.addVertex('New Zeland');

graph.addEdge('Tokyo', 'Japan');
graph.addEdge('Tokyo', 'New Zeland');
graph.addEdge('Japan', 'New Zeland');

console.log(graph);
graph.removeVertex('Tokyo');

// console.log(graph);