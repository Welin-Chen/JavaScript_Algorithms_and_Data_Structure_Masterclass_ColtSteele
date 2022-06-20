function areThereDuplicates(...arr) {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates(1, 1, "a"));
console.log(areThereDuplicates("a", "b", "c", "a"));
console.log(areThereDuplicates([]));
