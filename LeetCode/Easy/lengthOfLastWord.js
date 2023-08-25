/**
 * @param {string} s
 * @return {number}
 */
// First Attempt
// Runtime: 47 ms, Beats 87.06% of JS users
// Memory: 41.58 mb, Beats 86.66% of JS users
var lengthOfLastWord = function(s) {
    s = s.trim().split(" ")
    return s[s.length - 1].length
};
