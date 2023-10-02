/**
 * @param {string} colors
 * @return {boolean}
 */

// Runtime: 64 ms, Beats 95.00% of JS users
// Memory: 45.62 ms, Beats 50.00% of JS users
var winnerOfGame = function(colors) {   
    var a_count = 0;
    var b_count = 0;

    for (let i = 1; i < colors.length - 1 ; i++) {
        if (colors[i-1] === 'A' && colors [i] === 'A' && colors[i+1] === 'A') {
            a_count++
        }
        if (colors[i-1] === 'B' && colors [i] === 'B' && colors[i+1] === 'B') {
            b_count++
        }
    }
    return a_count > b_count
};
