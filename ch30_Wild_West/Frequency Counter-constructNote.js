function constructNote(str1, str2) {
  let obj1 = {},
    obj2 = {};
  if (str1.length > str2.length) return false;
  for (let c of str1) obj1[c] = (obj1[c] || 0) + 1;
  for (let c of str2) obj2[c] = (obj2[c] || 0) + 1;
  for (let c of str1) {
    if (obj1[c] > obj2[c]) return false;
  }
  return true;
}

console.log(constructNote("aa", "abc")); //false
console.log(constructNote("abc", "dcaba")); //true
console.log(constructNote("aabbcc", "bcabcaddff")); //true
