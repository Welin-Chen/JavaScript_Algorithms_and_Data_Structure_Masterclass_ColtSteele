// sliding window
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let key = str[i];
    if (seen[key]) start = Math.max(start, seen[key]);
    seen[key] = i + 1;
    longest = Math.max(longest, i - start + 1);
  }

  return longest;
}

// console.log(findLongestSubstring("")); //0
// console.log(findLongestSubstring("rithmschool")); //7
// console.log(findLongestSubstring("thisisisawesome")); //6
// console.log(findLongestSubstring("thecatinthehat")); //7
// console.log(findLongestSubstring("bbbbbbb")); //1
console.log(findLongestSubstring("longestsubstring")); //8
// console.log(findLongestSubstring("thisishowwedoit")); //6

// longest:7
//         e
//         s
// longestsubstring
//                i
