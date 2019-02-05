import { BinarySearchTree } from './data-structures/';


const tree = new BinarySearchTree();

console.log(tree);

tree.insert(10);

tree.insert(100);
tree.insert(9)
tree.insert(7)
tree.insert(3)

tree.insert(34)

tree.insert(8);

console.log(tree.contains(3));