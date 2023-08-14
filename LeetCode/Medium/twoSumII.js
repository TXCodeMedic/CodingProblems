/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// First Attempt: Two Pointers
// Runtime: 55 ms, Beats 83.02% of JS users
// Memory: 43.13 mb, Beats 18.49% of JS users
var twoSum = function(numbers, target) {
    var left = 0;
    var right = numbers.length - 1;
    
    while (left < right) {
        let curSum = numbers[left] + numbers[right];
        if (curSum == target) {
            return [left + 1, right + 1]
        }
        if (curSum < target) {
            left += 1
        }
        else if (curSum > target) {
            right -= 1
        }
    }
    return -1
};
