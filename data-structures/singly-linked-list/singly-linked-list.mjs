class Node {
  static create(val) {
    if (!val) { return; }

    return new Node(val);
  }

  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = Node.create(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) { return; }

    let current = this.head;
    let newTail = current;

    while(current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if(!this.head) { return; }

    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;

    if (!this.length) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    let node = Node.create(val);

    if(!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  get(position) {
    if (this.length < position|| position < 0) { return; }
    let idx = 0;
    let node = this.head;
    while(idx !== position) {
      node = node.next;
      idx++;
    }

    return node;
  }

  set(position, val) {
    let node = this.get(position);
    if (!node) { return false; }
    node.val = val;
    return true;
  }

  insert(position, val) {
    if (this.length < position || position < 0) { return; }

    let node = Node.create(val);

    if (position === this.length) {
      return !!this.push(val);
    } else if (position === 0) {
      return !!this.unshift(val);
    } else {
      let prev = this.get(position - 1);
      let temp = prev.next;
      prev.next = node;
      node.next = temp;
      this.length++;
      return true;
    }
  }

  remove(idx) {
    if (idx >= this.length || idx < 0) { return; }

    if (idx === this.length - 1) { return this.pop(); }

    if (idx === 0) { return this.shift(); }

    const prev = this.get(idx - 1);
    const removed = prev.next;
    prev.next = removed.next;

    this.length--;

    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  print() {
    let arr = [];
    let current = this.head;

    while(current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }
}