function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;

  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    tempSum += arr[i];
  }
  for (let j = n; j < arr.length; j++) {
    tempSum = tempSum + arr[j] - arr[j - n];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); //5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); //5
console.log(maxSubarraySum([2, 3], 3)); //null
