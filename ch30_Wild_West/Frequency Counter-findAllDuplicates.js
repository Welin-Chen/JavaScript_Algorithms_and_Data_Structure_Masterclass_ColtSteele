function findAllDuplicates(arr) {
  let obj = {};
  let result = [];
  for (let i of arr) {
    if (obj[i] >= 1) result.push(i);
    obj[i] = (obj[i] || 0) + 1;
  }
  return result;
}

// console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); //array with 2 and 3
// console.log(findAllDuplicates([4, 3, 2, 1, 0])); //[]
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); //array with 3,,2,1
