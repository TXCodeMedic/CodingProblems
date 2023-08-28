/**
 * @param {number} n
 * @return {number}
 */

// Runtime: 40 ms, Beats 97.89%
// Memory: 41.59 mb, Beats 73.16%
function fib(n) {
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
};

var climbStairs = function(n) {
    if (n < 4) return n;
    let a = 1, b = 1, fib;
    for(let i = 2; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
    return fib;
};
