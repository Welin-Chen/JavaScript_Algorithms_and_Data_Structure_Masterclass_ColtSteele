let counter = 0;
function countZeroes(arr) {
  console.log("counter >>> ", ++counter);
  if (arr[arr.length - 1] === 1 || !arr.length) return 0;
  if (arr[0] === 0) return arr.length;
  let mid = Math.floor(arr.length / 2);
  return countZeroes(arr.slice(0, mid)) + countZeroes(arr.slice(mid));
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
