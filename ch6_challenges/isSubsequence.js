// Mutiple Pointer
function isSubsequence(str1, str2) {
  let i = 0;

  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
    }
    if (!str1[i]) {
      return true;
    }
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); //true
console.log(isSubsequence("sing", "sting")); //true
console.log(isSubsequence("abc", "abracadabra")); //true
console.log(isSubsequence("abc", "acb")); //false
