function flatten(arr) {
  if (arr.length === 0) return [];
  let result = [];

  Array.isArray(arr[0]) ? (result = flatten(arr[0])) : result.push(arr[0]);

  return result.concat(flatten(arr.slice(1)));
}

console.log(flatten([[1], 2, 3, [4, 5]])); //[1,2,3,4,5]
console.log(flatten([1, 2, 3, [4, 5]])); //[1,2,3,4,5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); //[1,2,3,4,5]
console.log(flatten([[1], [2, [3]]])); //[1,2,3]
