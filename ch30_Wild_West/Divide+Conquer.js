let counter = 0;
function countZeroes(arr) {
  if (arr[arr.length - 1] === 1 || !arr.length) return 0;
  if (arr[0] === 0) return arr.length;
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left <= right) {
    console.log("counter >>> ", ++counter);
    mid = Math.floor((right + left) / 2);
    if (arr[mid] === 0) right = mid - 1;
    else left = mid + 1;
  }
  return arr[mid] === 0 ? arr.length - mid : arr.length - mid - 1;
}
//  r
//  l
// [0, 0, 0]
//     m
console.log(countZeroes([1, 1, 1, 1, 0, 0])); //2
console.log(countZeroes([1, 0, 0, 0, 0])); //4
console.log(countZeroes([0, 0, 0])); //3
console.log(countZeroes([1, 1, 1, 1])); //0
console.log(countZeroes([])); //0
//           r
// [1, 1, 1, 1, 0, 0]
//           m
//           l

//     r
// [1, 0, 0, 0, 0]
//     m
//     l
