/**
 * @param {string} s
 * @return {number}
 */

// Runtime: 127 ms, Beats 80.23% of JS users
// Memory: 46.28 mb Beats 93.02% of JS users
var minDeletions = function(s) {
    var deletions = 0;
    var counter = {};
    for (let i = 0; i < s.length; i++) {
        if (counter[s[i]] == undefined) {
            counter[s[i]] = 1;
        } else {
            counter[s[i]] += 1
        }
    }
    var lenSet = new Set();
    for (var key in counter) {
        while (lenSet.has(counter[key]) && counter[key] > 0) {
            counter[key] -= 1
            deletions++
        }
        lenSet.add(counter[key]);
    }
    return deletions;
};
