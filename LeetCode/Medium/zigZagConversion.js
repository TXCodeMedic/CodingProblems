/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// First Attempt
// Runtime: 83 ms, Beats 57.75% of JS users
// Memory: 48.79 mb, Beats 37.73% of JS users
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s
    }

    var resArr = [];
    for (let i = 0; i < numRows; i++){
        resArr.push([]);
    }

    var currentRow = 0;
    var goingDown = true;
    for (let i = 0; i < s.length; i++){
        if (currentRow + 1 === numRows) {
            goingDown = false;
        } 
        else if (currentRow === 0) {
            goingDown = true;
        }

        if (goingDown === true) {
            resArr[currentRow].push(s[i])
            currentRow++
        } else {
            resArr[currentRow].push(s[i])
            currentRow--
        }
    }
    var res = ``;

    for (let i = 0; i < resArr.length; i++) {
        res += resArr[i].join("")
    }
    
    return res;
};

// Second Attempt :RESTUDY!!!!
// Runtime: 66ms, Beats 92.87% of JS users
// Memory: 46.43 mb, Beats 72.50% of JS users
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    let result = '';
    const n = s.length;
    const cycleLen = 2 * numRows - 2;
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < n; j += cycleLen) {
            result += s[j + i];
            if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
                result += s[j + cycleLen - i];
            }
        }
    }
    return result;
};

