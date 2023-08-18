/**
 * @param {number} x
 * @return {number}
 */
// First Attempt:
// Runtime: 64ms, Beats 72.31% of JS users
// Memory: 43.56 mb, Beats 82.79% of JS users
var reverse = function(x) {
    x = x.toString().split('');
    if (x[0] === '-') {
         x = x[0] + x.slice(1,x.length).reverse().join('')
    } else {
         x = x.reverse().join('');
    }
    x = parseInt(x);
    if (x > Math.pow(2,31) || x < Math.pow(-2,31)) {
        return 0;
    }
    return x;
};
