// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         // SWAP
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

// ES2015
// function bubbleSort(arr) {
//   const swap = (arr, index1, index2) =>
//     ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
// }

// Optimal bubble sort with noSwap
function bubbleSort(arr) {
  let count = 0;
  const swap = (arr, index1, index2) =>
    ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);

  for (let i = arr.length; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
      count++;
    }
    if (noSwap) break;
  }
  console.log("count >>> ", count);
  return arr;
}

// console.log(bubbleSort([37, 45, 29, 8, -3, 98]));
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
