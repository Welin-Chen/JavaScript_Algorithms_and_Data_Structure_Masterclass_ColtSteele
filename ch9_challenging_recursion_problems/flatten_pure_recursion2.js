function flatten(arr, result = []) {
  for (let i in arr) {
    if (typeof arr[i] === "object") {
      flatten(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(flatten([[1], 2, 3, [4, 5]])); //[1,2,3,4,5]
// console.log(flatten([1, 2, 3, [4, 5]])); //[1,2,3,4,5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); //[1,2,3,4,5]
// console.log(flatten([[1], [2, [3]]])); //[1,2,3]
