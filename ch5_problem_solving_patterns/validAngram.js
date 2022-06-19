function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let i = 0; i < str1.length; i++) {
    let key = str1[i];
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let key = str2[i];
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
  }
  for (let i = 0; i < str1.length; i++) {
    let key = str1[i];
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "cat"));
