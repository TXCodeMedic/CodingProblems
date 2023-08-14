/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// First Attempt
// Runtime: 144 ms, Beats 59.27% of JS users
// Memory: 51.48 mb , Beats 56.67% of JS users

var findKthLargest = function(nums, k) {
    nums = nums.sort((a, b) => a - b);

    for (let i = 1; i < k; i++) {
        nums.pop()
    }
    return nums[nums.length - 1]
};

// Second Attempt: popping inst neccessary
// Runtime: 143 ms, Beats 60.17% of JS users
// Memory: 51.25 mb, Beats 64.49% of JS users
var findKthLargest = function(nums, k) {
    nums = nums.sort((a, b) => a - b);
    return nums[nums.length - (k)]
};
