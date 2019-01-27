class Node {
  static create(val) {
    if (!val) { return; }

    return new Node(val);
  }

  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = Node.create(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) { return undefined; }

    const currentTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }

    this.length--;
    return currentTail;
  }

  shift() {
    if (!this.length) { return undefined; }

    const currentHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      this.head.prev = null;
      currentHead.next = null;
    }

    this.length--;
    return currentHead;
  }

  unshift(val) {
    const node = Node.create(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;
    return this
  }

  get(position) {
    if (position >= this.length || position < 0) { return; }

    let node;
    if (position <= this.length / 2) {
      let idx = 0;
      node = this.head;
      while(idx !== position) {
        node = node.next;
        idx++;
      }
    }

    if (position > this.length /2) {
      let idx = this.length - 1;
      node = this.tail;
      while (idx !== position) {
        node = node.prev;
        idx--;
      }
    }

    return node;
  }

  set(idx, value) {
    const node = this.get(idx);
    if (!node) { return; }

    node.val = value;
    return true;
  }

  insert(idx, value) {
    if (idx < 0 || idx > this.length) { return; }
    if (idx === 0) { return !!this.unshift(value); }
    if (idx === this.length) { return !!this.push(value); }
    
    const node = Node.create(value);
    const currentNode = this.get(idx);
    const prevNode = currentNode.prev;
    node.next = currentNode;
    node.prev = prevNode;
    prevNode.next = node;
    currentNode.prev = node;
    this.length++;

    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) { return; }
    if (idx === 0) { return this.shift(); }
    if (idx === this.length - 1) { return this.pop(); }

    const node = this.get(idx);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
    this.length--;

    return node;
  }

  print() {
    const asArray = [];
    let current = this.head;
    while(current) {
      asArray.push(current.val)
      current = current.next;
    }
    console.log(asArray);
  }
}
