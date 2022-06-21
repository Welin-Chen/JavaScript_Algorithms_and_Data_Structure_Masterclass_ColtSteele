// function capitalizeFirst(arr) {
//   let newArr = [];

//   function helper(arr) {
//     if (arr.length === 0) return;
//     newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));

//     return helper(arr.slice(1));
//   }
//   helper(arr);

//   return newArr;
// }

function capitalizeFirst(arr, newArr = []) {
  if (arr.length === 0) return [];
  newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));

  return newArr.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"])); //['Car','Taco','Banana']
