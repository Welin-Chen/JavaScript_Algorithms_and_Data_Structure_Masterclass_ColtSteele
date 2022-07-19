function selectionSort(arr, comparator) {
  const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

  if (typeof comparator != "function") {
    comparator = (v1, v2) => v1 - v2;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let smallest = i;
    for (let j = i; j < arr.length; j++) {
      if (comparator(arr[j], arr[smallest]) <= 0) smallest = j;
    }
    if (i !== smallest) swap(arr, i, smallest);
  }
  return arr;
}

console.log(selectionSort([4, 20, 12, 10, 7, 9])); //[4,7,9,10,12,20]
console.log(selectionSort([1, 2, 3])); //[4,7,9,10,12,20]
console.log(selectionSort([])); //[4,7,9,10,12,20]

let kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
function strComp(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;

  return 0;
}

console.log(selectionSort(kitties, strComp));

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

console.log(selectionSort(moarKittyData, oldestToYoungest));
