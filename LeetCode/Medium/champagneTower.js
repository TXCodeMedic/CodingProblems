/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */

// Runtime: 47 ms, Beats 97.83% of JS users
// Memory: 46.64 mb, Beats 57.61% of JS users
var champagneTower = function(poured, query_row, query_glass) {
    const tower = new Array(query_row + 1).fill(0).map(() => new Array(query_row + 1).fill(0));
    tower[0][0] = poured;
    for (let row = 0; row < query_row; row++) {
        for (let glass = 0; glass <= row; glass++) {
            const excess = (tower[row][glass] - 1) / 2.0;
            if (excess > 0) {
                tower[row + 1][glass] += excess;
                tower[row + 1][glass + 1] += excess;
            }
        }
    }
    return Math.min(1, tower[query_row][query_glass]);
};
