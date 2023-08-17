/**
 * @param {string} s
 * @return {number}
 */
// First Attempt:
// Runtime: 96 ms, Beats 97.06% of JS users
// Memory: 46.48 mb, Beats 92.21% of JS users
var romanToInt = function(s) {
    const map = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
        };
    let num = 0;
    
    for(let i = 0; i < s.length; i++) {
        let curr = map[s[i]];
        let next = map[s[i+1]];
        if (curr < next) {
            num -= curr;
        } else {   
        num += curr;
        }
    }
    return num;    
};
