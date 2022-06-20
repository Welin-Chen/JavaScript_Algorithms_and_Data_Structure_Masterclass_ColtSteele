function areThereDuplicates(...arr) {
  console.log(arr);
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) return true;
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates(1, 1, "a"));
console.log(areThereDuplicates("a", "b", "c", "a"));
console.log(areThereDuplicates([]));
