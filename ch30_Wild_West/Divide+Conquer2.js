function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  if (arr[left] === 0) return arr.length;
  if (arr[right] === 1) return 0;
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === 1) left = mid + 1;
    if (arr[mid] === 0) right = mid;
  }
  return arr.length - left;
}
//  r
//  l
// [0, 0, 0]
//  m
console.log(countZeroes([1, 1, 1, 1, 0, 0])); //2
console.log(countZeroes([1, 0, 0, 0, 0])); //4
console.log(countZeroes([0, 0, 0])); //3
console.log(countZeroes([1, 1, 1, 1])); //0
console.log(countZeroes([])); //0
//              r
// [1, 1, 1, 1, 0, 0]
//           m
//              l

//     r
// [1, 0, 0, 0, 0]
//  m
//     l
