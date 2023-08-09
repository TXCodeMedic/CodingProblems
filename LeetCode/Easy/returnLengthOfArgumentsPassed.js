/**
 * @return {number}
 */

// First Attempt: 
// Runtime: 37 ms, beats 99.7% of JS users
// Memory 42.11 mb, beats 24.10% of JS users
var argumentsLength = function(...args) {
 return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
