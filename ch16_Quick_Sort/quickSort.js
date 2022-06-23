function pivot(arr, start = 0, end = arr.length - 1) {
  //   function swap(arr, i, j) {
  //     let temp = arr[i];
  //     arr[i] = arr[j];
  //     arr[j] = temp;
  //   }
  console.log(end);
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(quickSort([100, -3, 4, 1, 6, 7, 2, 3, 8, 5, -1]));
