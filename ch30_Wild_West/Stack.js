class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (this.first === null) return null;
    if (this.first === this.last) this.last = null;
    let poppedNode = this.first;
    this.first = this.first.next;
    this.size--;
    return poppedNode.value;
  }
}

let stack = new Stack();
console.log(stack.push(10));
console.log(stack.push(100));
console.log(stack.push(1000));
