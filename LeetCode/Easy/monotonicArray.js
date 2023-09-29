/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Runtime: 73 ms, Beats 77.14% of JS users
// Memory: 52.95 ms, Beats 76.87% of JS users
var isMonotonic = function(nums) {
    if (nums.length < 2) return true;

    let direction = 0;  // 0 means unknown, 1 means increasing, -1 means decreasing

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) {  // increasing
            if (direction === 0) direction = 1;
            else if (direction === -1) return false;
            
        } else if (nums[i] < nums[i-1]) {  // decreasing
            if (direction === 0) direction = -1;
            else if (direction === 1) return false;
        }
    }

    return true;
};
