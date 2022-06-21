function reverse(str) {
  let newStr = "";

  function helper(str) {
    if (str.length === 0) return;
    newStr = newStr.concat(str[str.length - 1]);
    return helper(str.substr(0, str.length - 1));
  }

  helper(str);
  return newStr;
}

console.log(reverse("awesome")); //'emosewa'
console.log(reverse("rithmschool")); //'loohcsmhtir'
