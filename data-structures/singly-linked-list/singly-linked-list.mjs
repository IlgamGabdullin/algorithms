class Node {
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
    let node = new Node(val);

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
    if (!this.length) { return; }

    let current = this.head;

    while(current) {
      if (this.length === 1) {
        let last = this.head;
        this.head = null;
        this.tail = null;
        this.length--;

        return last;
      }

      if (current.next === this.tail) {
        let popped = this.tail;
        current.next = null;
        this.tail = current;


        this.length--;
        return popped;
      }

      current = current.next;
    }
  }
}