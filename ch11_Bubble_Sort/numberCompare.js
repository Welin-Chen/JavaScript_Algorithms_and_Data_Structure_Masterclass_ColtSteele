function numberCompare(num1, num2) {
  return num1 - num2;
}

console.log([6, 4, 15, 10].sort(numberCompare));

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

console.log(["aaaaaa", "bbbbb", "ccc", "dddddd"].sort(compareByLen));
