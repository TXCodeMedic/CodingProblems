/**
 * @param {number[]} height
 * @return {number}
 */

// First Attempt: Two Pointers
// Runtime: 73 ms, Beats 40.51% of JS Users
// Memory: 49.94 mb, Beats 21.45% of JS Users
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    while (left < right) {
        let volume = Math.min(height[left], height[right]) * (right - left);

        if (volume > result) { result = volume; }

        if (height[right] < height[left]) {
            right--;
        } else {
            left++
        }
    }
    return result;
};
