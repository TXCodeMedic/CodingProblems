/**
 * @param {number} x
 * @return {number}
 */
// First Attempt:
// Runtime: 50 ms, Beats 97.69% of JS users
// Memory: 44.03 mb, Beats 25.34% of JS users
var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x))
};

// Second Attempt: Without Math Includes Binary Search
// Runtime: 63 ms, Beats 75.22% of JS users
// Memory: 43.50 mb, Beats 67.97% of JS users
var mySqrt = function(x) {
  var left = 1;
  var right = Math.floor(x / 2) + 1;
  var mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};
