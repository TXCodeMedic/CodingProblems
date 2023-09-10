/**
 * @param {number} n
 * @return {number}
 */
// First Attempt: Combinations and Permutations
// Runtime: 52 ms, Beats 69.23% of JS users
// Memory: 41.96 mb, Beats 69.23% of JS users
var MOD = 10**9 + 7;

var countOrders = function(n) {
  // just 1 delivery only has 1 solution
  var ans = 1;
  // (2i - 1) * (i)
  for (i =2; i <= n; i++) {
    ans = (ans * (2 * i - 1) * i) % MOD;
  }
  return ans;
};
