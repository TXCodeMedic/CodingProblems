/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 43 ms, Beats 93.51% of JS users.
// Memory: 41.46 mb, Beats 87.65% of JS users
var numIdenticalPairs = function(nums) {
    const map = {};
    let count = 0;
    nums.forEach(num => {
        if (map[num]) {
            count += map[num];
            map[num]++;
        } else {
            map[num] = 1;
        }
    })
    return count;
};
