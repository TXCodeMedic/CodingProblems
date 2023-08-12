/**
 * @param {number} numRows
 * @return {number[][]}
 */

// First Attempt:
// Runtime: 52 ms, Beats 83.85% of JS users
// Memory: 42 mb, Beats 71.41% of JS users
var generate = function(numRows) {
    var result = [];
    for (var i = 0; i < numRows; i++) {
        result[i] = [];
        result[i][0] = 1;
        for (var j = 1; j < i; j++) {
            result[i][j] = result[i-1][j-1] + result[i-1][j]
        }
        result[i][i] = 1;
    }
    return result;
};
