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
      return this.root;
    }

    let currentNode = this.root;
    let isInserted = false;

    while (currentNode && !isInserted) {
      let direction = node.value > currentNode.value  ? 'right' : 'left';

      if (currentNode[direction]) {
        currentNode = currentNode[direction];
      } else {
        currentNode[direction] = node;
        isInserted = true;
      }
    }
    return this;
  }
}
