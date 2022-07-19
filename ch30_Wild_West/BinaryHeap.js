class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[idx] = parent;
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }
  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let top = this.values[0];

    while (true) {
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;
      let left, right;
      let swapIdx = null;
      if (leftIdx < length) {
        left = this.values[leftIdx];
        if (top < left) swapIdx = leftIdx;
      }
      if (rightIdx < length) {
        right = this.values[rightIdx];
        if (top < right && left < right) swapIdx = rightIdx;
      }

      if (swapIdx === null) break;
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = top;
      idx = swapIdx;
    }
  }
}

binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
binaryHeap.insert(2);
binaryHeap.insert(3);
binaryHeap.insert(4);
binaryHeap.insert(5);
binaryHeap.insert(6);

console.log(binaryHeap.extractMax());
console.log(binaryHeap.values);

console.log(binaryHeap.extractMax());
console.log(binaryHeap.values);

console.log(binaryHeap.extractMax());
console.log(binaryHeap.values);
