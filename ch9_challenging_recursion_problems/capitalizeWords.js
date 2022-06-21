function capitalizeWords(arr) {
  let newArr = [];
  if (arr.length === 0) return [];
  newArr.push(arr[0].toUpperCase());
  return newArr.concat(capitalizeWords(arr.slice("1")));
}

// function capitalizeWords(array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }
//   let res = capitalizeWords(array.slice(0, -1));
//   res.push(array.slice(array.length - 1)[0].toUpperCase());
//   return res;
// }

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
