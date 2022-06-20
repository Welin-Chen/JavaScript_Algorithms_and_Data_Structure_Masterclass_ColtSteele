function areThereDuplicates(...arr) {
  arr.sort();
  console.log(arr);
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) return true;
    i = j;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates(1, 1, "a"));
console.log(areThereDuplicates("a", "b", "c", "a"));
console.log(areThereDuplicates([]));
