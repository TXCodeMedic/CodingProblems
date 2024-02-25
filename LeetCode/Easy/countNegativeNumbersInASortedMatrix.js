// Runtime: 48 ms, Beats 90.03% of JS users
// Memory: 51.06 mb, Beats 51.06% of JS users

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    const cols = grid[0].length;
    for(const row of grid) {
        let left = 0;
        let right = cols - 1;

        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2 );

            if (row[mid] < 0) {
                count += right - mid + 1;
                right = mid - 1;

            } else {
                left = mid + 1;
            }
        }
    }
    return count;
};
