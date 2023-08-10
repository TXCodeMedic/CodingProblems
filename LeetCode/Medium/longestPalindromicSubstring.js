/**
 * @param {string} s
 * @return {string}
 */

// First Attempt: 
// Runtime: 76 ms, Beats 87.47% of JS users
// Memory: 44.18 mb, Beats 72.58% of JS users
var longestPalindrome = function(s) {
    var res = ``;
    var resLen = 0;

    for (let i = 0; i < s.length; i++) {
        // odd length
        let left = i
        let right = i

        while (left >= 0 && right < s.length && s[left] === s[right] ) {
            if (right - left + 1 > resLen) {
                res = s.slice(left,right + 1)
                resLen = right - left + 1
            }
            left -= 1
            right += 1
        }
        // even length
        left = i
        right = i + 1
        while ( left >= 0 && right < s.length && s[left] == s[right]) {
            if (right - left + 1 > resLen) {
                res = s.slice(left,right + 1)
                resLen = right - left + 1
            }
            left -= 1
            right += 1
        }
    }
    return res
};
