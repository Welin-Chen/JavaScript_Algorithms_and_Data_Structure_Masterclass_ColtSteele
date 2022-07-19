function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  return num.toString().length;
}

function mostDigits(nums) {
  let mostDigit = 0;
  nums.forEach((num) => {
    mostDigit = Math.max(mostDigit, digitCount(num));
  });
  return mostDigit;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums),
    digitBuckets;
  for (let i = 0; i < maxDigitCount; i++) {
    digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      digitBuckets[getDigit(nums[j], i)].push(nums[j]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([8, 6, 1, 12]));
console.log(radixSort([10, 100, 1, 1000, 1000000]));

// console.log(mostDigits([1, 9, 10, 100, 99])); //3
// console.log(mostDigits([])); //3

// console.log(digitCount(0));
// console.log(digitCount(1));
// console.log(digitCount(9));
// console.log(digitCount(77777));

// console.log(getDigit(12345, 0));
// console.log(getDigit(-12345, 1));
