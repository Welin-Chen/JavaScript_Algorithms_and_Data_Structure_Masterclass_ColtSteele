function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let left = 0;
  let right = 1;
  let uniqCount = 1;

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left = right;
      uniqCount++;
    }
    console.log("l: ", left, "r: ", right, "Count: ", uniqCount);
  }
  return uniqCount;
}

console.log(countUniqueValues([1, 1, 2]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 1]));
