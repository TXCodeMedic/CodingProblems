/**
 * @param {number} x
 * @return {boolean}
 */

// First Attempt:
// Runtime: 146 ms, Beats 87.47% of JS users
// Memory: 51.32 mb, Beats 37.2% of JS users
var isPalindrome = function(x) {
    var left = x.toString().split("").join("")
    var right = x.toString().split("").reverse().join("")

    return left === right
};
