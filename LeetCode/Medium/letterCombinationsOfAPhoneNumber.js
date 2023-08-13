/**
 * @param {string} digits
 * @return {string[]}
 */

// First Attempt: Iterative O(N^2)
// Runtime: 39 ms, Beats 98.70% of JS users
// Memory: 42.12 mb, Beats 30.14% of JS users
var letterCombinations = function(digits) {
    if (digits.length === 0) { 
        return []
    }

    var phoneMap = {
        '2' : 'abc',
        '3' : 'def',
        '4' : 'ghi',
        '5' : 'jkl',
        '6' : 'mno',
        '7' : 'pqrs',
        '8' : 'tuv',
        '9' : 'wxyz'
    };

    let combinations = [''];

    for (const digit of digits) {
        const newCombinations = [];

        for (const combination of combinations) {
            for (const letter of phoneMap[digit]) {
                newCombinations.push(combination + letter);
            }
        }
    combinations = newCombinations;
    }
  return combinations;
};
