/**
 * @param {number[]} ratings
 * @return {number}
 */

// Runtime: 58 ms, Beats 84.36% of JS users
// Memory: 45.3 mb, Beats 53.52% of JS users
var candy = function(ratings) {
    const n = ratings.length;
    var candies = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }
    return candies.reduce((a, b) => a + b, 0);
};
