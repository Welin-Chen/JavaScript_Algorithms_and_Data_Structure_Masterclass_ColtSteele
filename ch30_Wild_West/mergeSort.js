function merge(arr1, arr2, comparator) {
  // if (typeof comparator != "function") comparator = (v1, v2) => v1 - v2;
  if (!comparator) comparator = (v1, v2) => v1 - v2;

  let result = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (comparator(arr1[i], arr2[j]) < 0) result.push(arr1[i]) && i++;
    else result.push(arr2[j]) && j++;
  }

  while (i < arr1.length) result.push(arr1[i]) && i++;
  while (j < arr2.length) result.push(arr2[j]) && j++;

  return result;
}

function mergeSort(arr, comparator) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid), comparator);
  return merge(left, right, comparator);
}

// let arr1 = [1, 3, 4, 5];
// let arr2 = [2, 4, 6, 8];
// console.log(merge(arr1, arr2));

// let arr3 = [-2, -1, 0, 4, 5, 6];
// let arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
// console.log(merge(arr3, arr4));

// let names = ["Bob", "Ethel", "Christine"];
// let otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];

// function stringLengthComparator(str1, str2) {
//   return str1.length - str2.length;
// }

// console.log(merge(names, otherNames, stringLengthComparator));

console.log(mergeSort([4, 20, 12, 10, 7, 9])); //[4,7,9,10,12,20]
console.log(mergeSort([1, 2, 3])); //[4,7,9,10,12,20]
console.log(mergeSort([])); //[4,7,9,10,12,20]

let kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
function strComp(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;

  return 0;
}

console.log(mergeSort(kitties, strComp));

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

console.log(mergeSort(moarKittyData, oldestToYoungest));
