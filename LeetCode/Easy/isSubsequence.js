/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Runtime: 45 ms, Beats 92.37% of JS users
// Memory: 41.99 mb, Beats 55.89% of JS users
var isSubsequence = function(s, t) {
    if (s.length > t.length) { return false; }

    const t_length = t.length;
    let subsequence = 0;
    
    for (let i = 0; i < t_length; i++) {
    if (s[subsequence] === t[i]) {
      subsequence++;
    }
  }
  return subsequence === s.length
};
