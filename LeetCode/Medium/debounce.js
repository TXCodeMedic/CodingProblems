/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

// Runtime: 59 ms, Beats 41.71% of JS users
// Memory: 41.7 mb, Beats 72.58% of JS users
var debounce = function(fn, t = 1000) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
