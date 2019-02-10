import { BinarySearchTree } from './data-structures/';


const tree = new BinarySearchTree();

tree.insert(10);

tree.insert(100);
tree.insert(9)
tree.insert(7)
tree.insert(3)

tree.insert(34)

tree.insert(8);

console.log(tree.bfs())
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());