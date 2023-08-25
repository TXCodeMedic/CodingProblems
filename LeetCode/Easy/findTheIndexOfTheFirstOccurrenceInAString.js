/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// First attempt: Iterative
// Runtime: 55 ms, Beats 56.18% of JS users
// Memory: 41.77 mb, Beats 68.73% of JS users 
var strStr = function(haystack, needle) {
    if (haystack === needle) { return 0; }
    for (let i = 0; i < haystack.length; i++) {
        if (needle === (haystack.slice(i, i + needle.length))) {
            return i
        }
    }
    return -1
};

// Second Attempt: Filter inputs before iterating
// Runtime: 48 ms, Beats 85.42% of JS users
// Memory: 41.50 mb, Beats 90.14% of JS users
var strStr = function(haystack, needle) {
    if (haystack === needle) { return 0; }
    // Filter here
    if (haystack.length < needle.length) return -1;
    for (let i = 0; i < haystack.length; i++) {
        if (needle === (haystack.slice(i, i + needle.length))) {
            return i
        }
    }
    return -1
};
