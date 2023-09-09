/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Bottom up DP
// Runtime: 52 ms, Beasts 80.32% of JS Users
// Memory: 42.72 mb, Beats 64.36% of JS Users
var combinationSum4 = function(nums, target) {
    let dp = new Uint32Array(target + 1);
    dp[0] = 1;
    for (let i = 0; i < target; i++) {
        if (!dp[i]) continue
        for (let num of nums)
            if (num + i <= target) dp[i + num] += dp[i]
    }
    return dp[target]
};
