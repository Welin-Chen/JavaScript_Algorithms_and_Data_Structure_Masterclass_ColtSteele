function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (val === arr[middle]) return middle;
    else if (val > arr[middle]) left = middle + 1;
    else if (val < arr[middle]) right = middle - 1;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); //1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); //2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); //4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); //-1
