class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }
  //   pop() {
  //     let removedNode;
  //     if (this.length === 0) return undefined;
  //     if (this.length === 1) {
  //       removedNode = this.head;
  //       this.head = null;
  //       this.tail = null;
  //     } else {
  //       let current = this.head;
  //       while (current) {
  //         if (current.next === this.tail) {
  //           removedNode = current.next;
  //           this.tail = current;
  //           this.tail.next = null;
  //         }
  //         current = current.next;
  //       }
  //     }

  //     this.length--;
  //     return removedNode;
  //   }

  get(index) {
    if (this.length === 0) return null;
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) return current;
      current = current.next;
      count++;
    }
    return null;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.next = afterNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();

    let removedNode = this.get(index);
    if (removedNode) {
      let beforeNode = this.get(index - 1);
      let afterNode = removedNode.next;
      beforeNode.next = afterNode;
      this.length--;
      return removedNode;
    } else return undefined;
  }

  rotate(nums) {
    if (nums < 0) {
      nums = (this.length + (nums % this.length)) % this.length;
    } else {
      nums = nums % this.length;
    }
    console.log(nums);
    if (nums === 0) return this.print();

    let newTail = this.get(nums - 1);
    let newHead = newTail.next;
    this.tail.next = this.head;
    this.head = newHead;
    this.tail = newTail;
    this.tail.next = null;
    return this.print();
  }

  print() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}

let list = new SinglyLinkedList();
list.push(5);
list.push(10);
list.push(15);
list.push(20);
list.push(25);
