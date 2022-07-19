// function coinChange(coins, amount) {
//   let dp = Array(amount + 1).fill(0);
//   dp[0] = 1;
//   for (let i = 0; i < coins.length; i++) {
//     for (let j = coins[i]; j <= amount; j++) {
//       dp[j] += dp[j - coins[i]];
//     }
//   }
//   return dp[amount];
// }

function coinChange(coins, amount) {
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let c of coins) {
    for (let j = c; j <= amount; j++) {
      dp[j] += dp[j - c];
    }
  }
  return dp[amount];
}
let denominations = [1, 5, 10, 25];

// console.log(coinChange(denominations, 1)); //1
// console.log(coinChange(denominations, 2)); //1
// console.log(coinChange(denominations, 5)); //2
// console.log(coinChange(denominations, 10)); //4
console.log(coinChange(denominations, 14511)); //4092222339
