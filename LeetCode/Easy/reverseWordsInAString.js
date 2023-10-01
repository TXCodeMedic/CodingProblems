/**
 * @param {string} s
 * @return {string}
 */
// Runtime: 58 ms, Beats 85.59% of JS users
// Memory: 47.54 mb, Beats 97.67% of JS users

var reverseWords = function(s) {
    s = s.split(' ');
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].split('').reverse().join('')
    }
    return s.join(' ');
};
