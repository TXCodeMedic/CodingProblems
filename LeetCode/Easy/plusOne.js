/**
 * @param {number[]} digits
 * @return {number[]}
 */
// Runtime: 51 ms, Beats 76.14% of JS users
// Memory: 41.81 mb, Beats 57.36% of JS users
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
        if (i === 0) {
            digits.unshift(1);
            return digits;
        }
    }
};
