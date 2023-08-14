/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// First Attempt
// Runtime: 144 ms, Beats 59.27%
// Memory: 51.48 mb , Beats 56.67%

var findKthLargest = function(nums, k) {
    nums = nums.sort((a, b) => a - b);

    for (let i = 1; i < k; i++) {
        nums.pop()
    }
    return nums[nums.length - 1]
};
