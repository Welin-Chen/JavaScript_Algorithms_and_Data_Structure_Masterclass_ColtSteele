// Sliding window
function minSubArrayLen(nums, sum) {
  let left = 0;
  let right = 0;
  let total = 0;
  let minLen = Infinity;
  while (left < nums.length) {
    if (total < sum && right < nums.length) {
      total += nums[right];
      right++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, right - left);
      total -= nums[left];
      left++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 1, 2, 4, 3], 7)); //2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); //2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); //1
console.log(minSubArrayLen([3], 52)); //1

//       s
// 2, 1, 4, 3
//            e
// total=3
// min=2
