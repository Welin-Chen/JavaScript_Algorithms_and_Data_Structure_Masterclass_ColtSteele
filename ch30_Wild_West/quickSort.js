function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  if (!comparator) comparator = (v1, v2) => v1 - v2;

  const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (comparator(pivot, arr[i]) > 0) swap(arr, ++swapIdx, i);
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
  if (left < right) {
    let mid = pivot(arr, comparator, left, right);
    quickSort(arr, comparator, left, mid - 1);
    quickSort(arr, comparator, mid + 1, right);
  }
  return arr;
}

// let arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
// let arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

// function strLength(a, b) {
//   return a.length - b.length;
// }

// console.log(pivot(arr1));
// console.log(pivot(arr3, strLength));

console.log(quickSort([4, 20, 12, 10, 7, 9])); //[4,7,9,10,12,20]
console.log(quickSort([1, 2, 3])); //[4,7,9,10,12,20]
console.log(quickSort([])); //[4,7,9,10,12,20]

let kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
function strComp(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;

  return 0;
}

console.log(quickSort(kitties, strComp));

let moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(quickSort(moarKittyData, oldestToYoungest));
