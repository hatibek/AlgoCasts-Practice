// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let listSize = 0;
    let node = this.head;

    while (node) {
      listSize++;
      node = node.next;
    }
    return listSize;
  }

  getFirst() {
    while (this.head) {
      return this.head;
    }
  }
}

module.exports = { Node, LinkedList };
