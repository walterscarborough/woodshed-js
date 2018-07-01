class SingleLinkedList {
  head = null;

  pushFront(node) {
    if (this.head !== null) {
      node.next = this.head;
    }

    this.head = node;
  }

  isEmpty() {
    return this.head === null;
  }
}

class Node {
  data = null;
  next = null;

  constructor(data) {
    this.data = data;
  }
}

module.exports = {
  SingleLinkedList,
  Node,
}
