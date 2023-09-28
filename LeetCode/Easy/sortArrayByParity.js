/**
 * @param {number[]} nums
 * @return {number[]}
 */

// First Attempt: Linear
// Runtime: 63 ms, Beats 72.48% of JS users
// Memory: 44.77 mb, Beats 37.81% og JS users
var sortArrayByParity = function(nums) {
    var odds = [];
    var evens = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evens.push(nums[i])
        } else {
            odds.push(nums[i])
        }
    }
    return evens.concat(odds)
};

// 
