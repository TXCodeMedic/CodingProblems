/**
 * @param {string[]} strs
 * @return {string}
 */
// Runtime: 53 ms, Beats 79.19% of JS users
// Memory: 42.7 mb, Beats of 33.51% of JS users
var longestCommonPrefix = function(strs) {
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
            return prev.slice(0, i);
    });
};
