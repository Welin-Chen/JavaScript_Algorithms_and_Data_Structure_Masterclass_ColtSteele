function bubbleSort(arr, comparator) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  if (typeof comparator != "function") {
    comparator = (v1, v2) => v1 - v2;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (comparator(arr[j], arr[j + 1]) >= 1) swap(arr, j, j + 1);
    }
  }
  return arr;
}

console.log(bubbleSort([4, 20, 12, 10, 7, 9])); //[4,7,9,10,12,20]
console.log(bubbleSort([1, 2, 3])); //[4,7,9,10,12,20]
console.log(bubbleSort([])); //[4,7,9,10,12,20]

let kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
function strComp(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;

  return 0;
}

console.log(bubbleSort(kitties, strComp));

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

console.log(bubbleSort(moarKittyData, oldestToYoungest));
