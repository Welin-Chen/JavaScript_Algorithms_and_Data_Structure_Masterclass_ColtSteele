// function charCount(str) {
//   let obj = {};
//   for (let char of str) {
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       obj[char] = ++obj[char] || 1;
//     }
//   }
//   return obj;
// }

function charCount(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

console.log(charCount("Hello World!"));

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numerica (0-9)
    !(code > 64 && code < 91) && //uper alpha (A-Z)
    !(code > 96 && code < 123) //lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}
