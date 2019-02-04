class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!value) { return; }

    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value === currentNode.value) { return; }
      let direction = node.value > currentNode.value  ? 'right' : 'left';

      if (currentNode[direction]) {
        currentNode = currentNode[direction];
      } else {
        currentNode[direction] = node;
        return this;
      }
    }
  }
}