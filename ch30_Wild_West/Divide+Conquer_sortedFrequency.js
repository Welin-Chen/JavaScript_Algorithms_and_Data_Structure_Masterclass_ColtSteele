function sortedFrequency(arr, num) {
  let counter = 0;
  let left = 0;
  let right = arr.length - 1;
  if (arr.length === 1) return arr[0] === num ? 1 : -1;
  while (left < right) {
    console.log("counter >>> ", ++counter);
    if (arr[left] < num) left++;
    if (arr[right] > num) right--;
    if (arr[left] === num && arr[right] === num) return right - left + 1;
  }
  return -1;
}

console.log(sortedFrequency([], 2)); //4
console.log(sortedFrequency([2], 2)); //4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); //4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); //1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); //2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); //-1
