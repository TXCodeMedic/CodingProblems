/**
 * @param {string} s
 * @return {number}
 */

// sliding window technique
// Runtime: 83 ms, Beats 69.88% of JS users
// Memory: 46.70 mb, Beats 74.70% of JS users
var lengthOfLongestSubstring = function(s) {
    var charSet = new Set();
    var lp = 0
    var res = 0

    for (let rp = 0; rp < s.length; rp++) {
        while (charSet.has(s[rp])) {
            charSet.delete(s[lp])
            lp += 1
        }
        charSet.add(s[rp]);
        res = Math.max(res, (rp - lp + 1))
    }
    return res;
};
