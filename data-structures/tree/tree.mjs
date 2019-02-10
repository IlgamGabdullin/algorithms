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

  contains(val) {
    if (!this.root) { return false; }
    let current = this.root;

    while(current) {
      if (val === current.value) {
        return current;
      }
      
      current = val > current.value ? current.right : current.left;
    }

    return false;
  }

  bfs() {
    if (!this.root) { return; }
  
    let queue = [];
    let visited = [];
    let node = this.root;
  
    queue.push(node);
  
    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
  
      if (node.left) {
        queue.push(node.left);
      }
  
      if (node.right) {
        queue.push(node.right);
      }
    }
  
    return visited;
  }

  dfsPreOrder() {
    if (!this.root) { return; }

    let visited = [];

    const traverse = (node) => {
      visited.push(node.value);

      if (node.left) { traverse(node.left) }
      if (node.right) { traverse(node.right); }
    }

    traverse(this.root);

    return visited;
  }

  dfsPostOrder() {
    if(!this.root) { return; }

    let visited = [];

    const traverse = (node) => {
      if (node.left) { traverse(node.left); }
      if (node.right) { traverse(node.right); }

      visited.push(node.value);
    }

    traverse(this.root);

    return visited;
  }

  dfsInOrder() {
    if (!this.root) { return; }

    let visited = [];

    const traverse = (node) => {
      if (node.left) { traverse(node.left); }
      visited.push(node.value);
      if (node.right) { traverse(node.right); }
    }

    traverse(this.root);

    return visited;
  }
}
