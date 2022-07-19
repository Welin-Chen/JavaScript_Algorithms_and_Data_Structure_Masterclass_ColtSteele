function minCoinChange(coins, amount) {
  let result = [];
  for (let c of coins.reverse()) {
    while (amount - c >= 0) {
      amount -= c;
      result.push(c);
    }
  }
  return amount === 0 ? result : -1;
}
// let coins = [1, 2, 5],
//   amount = 11;
// Output: 3;
// let coins = [2],
//   amount = 3;
// Output: -1;
let coins = [1],
  amount = 0;
Output: 0;

console.log(minCoinChange(coins, amount));
