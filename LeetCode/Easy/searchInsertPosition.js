/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// First Attempt: Binary Search
// Runtime: 55 ms, Beats 55.05% of JS users
// Memory: 42.47 mb, Beats 47.52% of JS users
var searchInsert = function(nums, target) {
        var left = 0
        var right = nums.length
        while (left < right) {
            let mid = left + Math.floor((right - left) / 2)
            if (target > nums[mid]) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        return left
};
