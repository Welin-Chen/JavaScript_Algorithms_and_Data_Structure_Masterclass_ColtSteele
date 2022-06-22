// function insertionSort(arr) {
//   let count = 0;
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       count++;
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }
//   console.log(count);
//   return arr;
// }

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > currentVal) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }

  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));

//     i
// [2, 1, 9, 76, 4]
//  j  j+1
