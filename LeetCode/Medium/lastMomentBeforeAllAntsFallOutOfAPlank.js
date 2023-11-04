/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */

// Runtime: 52 ms, Beats 100% of JS users
// Memory: 45.42 mb, Beats 33.33% of JS users
var getLastMoment = function(n, left, right) {
    // Find the farthest position among ants moving to the left.
    const maxLeft = Math.max(...left, 0);
    
    // Find the nearest position among ants moving to the right.
    const minRight = n - Math.min(...right, n);
    
    // Calculate the time when the last ant(s) fall.
    return Math.max(maxLeft, minRight);
};
