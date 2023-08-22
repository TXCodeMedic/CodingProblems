/**
 * @param {number} columnNumber
 * @return {string}
 */

// Runtime: 47 ms, Beats 84.12% of JS users
// Memory: 42.06 mb, 18.67% of JS users
var convertToTitle = function(columnNumber) {
    let str = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let res = '';
    let rem = 0;

    columnNumber = columnNumber - 1;
    while (columnNumber >= 0){
        rem = columnNumber % 26;
        res = str[rem] + res;
        columnNumber = (Math.floor(columnNumber/ 26) ) -1;
    }
    
    return res;
};
