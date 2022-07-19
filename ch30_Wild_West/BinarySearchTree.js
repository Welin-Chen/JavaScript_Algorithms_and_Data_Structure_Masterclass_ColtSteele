class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) this.root = newNode;
    else {
      let current = this.root;

      while (current) {
        if (value === current.value) return undefined;
        if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            break;
          } else current = current.right;
        } else if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            break;
          } else current = current.left;
        }
      }
    }
    return this;
  }
  find(val) {
    let current = this.root;
    while (current) {
      if (val === current.value) return current;
      else if (val < current.value) current = current.left;
      else if (val > current.value) current = current.right;
    }
    return undefined;
  }
  //   depthFirstSearchPreOrder
  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    let data = [];
    if (!this.root) return [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  breadthFirstSearch() {
    let queue = [];
    let data = [];
    queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  remove(val) {
    let removedNode;
    function del(root, val) {
      if (root === null) return null;
      else if (val < root.value) root.left = del(root.left, val);
      else if (val > root.value) root.right = del(root.right, val);
      else {
        //find removed node
        removedNode = root;
        // 1. root=leaft
        if (root.left === null && root.right === null) root = null;
        // 2. root has child (left or right)
        else if (root.left === null) root = root.right;
        else if (root.right === null) root = root.left;
        // 3. root has children (left and right)
        else {
          // find minimun in the right tree
          let minNode = root.right;
          while (minNode.left) {
            minNode = minNode.left;
          }
          root.value = minNode.value;
          root.right = del(root.right, minNode.value);
        }
      }
      return root;
    }
    del(this.root, val);
    return removedNode;
  }
  //   findSecondLargest() {
  //     let arr = this.DFSInOrder();
  //     return arr[arr.length - 2];
  //   }

  findSecondLargest() {
    let root = this.root,
      prev;
    if (!root || (!root.left && !root.right)) return undefined;
    if (!root.right) {
      root = root.left;
      while (root.right) {
        root = root.right;
      }
      return root.value;
    } else {
      while (root.right) {
        prev = root;
        root = root.right;
      }
      return prev.value;
    }
  }

  isBalanced() {
    let left = 0,
      right = 0;
    function traverse(node) {
      if (node.left) ++left && traverse(node.left);
      if (node.right) ++right && traverse(node.right);
    }
    traverse(this.root);
    if (Math.abs(left - right) > 1) return false;
    return true;
  }
}
//       15
//     10    20
//   1   12    50
//    5

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15).insert(20).insert(10).insert(12);
// .insert(1)
// .insert(5)
// .insert(50);
// console.log(binarySearchTree.isBalanced());

let binarySerachTree2 = new BinarySearchTree();
binarySerachTree2.insert(5);
console.log(binarySerachTree2.isBalanced());
binarySerachTree2.insert(6);
console.log(binarySerachTree2.isBalanced());
binarySerachTree2.insert(7);
console.log(binarySerachTree2.isBalanced());

// console.log(binarySearchTree.DFSPreOrder());
// console.log(binarySearchTree.DFSInOrder());
// console.log(binarySearchTree.DFSPostOrder());
// console.log(binarySearchTree.breadthFirstSearch());
// console.log(binarySearchTree.remove(50));
// console.log(binarySearchTree);
// console.log(binarySearchTree.findSecondLargest());
