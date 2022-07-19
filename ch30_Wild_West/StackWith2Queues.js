class Stack {
  constructor() {
    this.queue = new Queue();
  }
  push(val) {
    let queue2 = new Queue();
    queue2.enqueue(val);
    while (this.queue.size) {
      queue2.enqueue(this.queue.dequeue());
    }
    this.queue = queue2;
    return this;
  } //O(n)
  pop() {
    return this.queue.dequeue();
  } //O(1)
}

// queue2=[3 2 1]
// this.queue=[3 2 1]
// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let s = new Stack();

console.log(s.push(10).push(20).push(30));
