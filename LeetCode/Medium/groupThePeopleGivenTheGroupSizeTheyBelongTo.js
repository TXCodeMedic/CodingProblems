/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

// Runtime: 72 ms, Beats 92.39% of JS users.
// Memory: 48.30 mb, Beats 20.11%
var groupThePeople = function(groupSizes) {
    var res = [];
    var groups = {};

    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];

        if (!groups[size]) {
            groups[size] = [];
        }

        groups[size].push(i);

        if (groups[size].length === size) {
            res.push(groups[size]);
            delete groups[size];
        }
    }

    return res;    
};
