/**
 * @param {number} num
 * @return {string}
 */

// Runtime: 90 ms, Beats 95.94% of JS users
// Memory: 46.65 mb, Beats 88.74% of JS users

//Create Look Up Tables:
const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

var intToRoman = function(N) {
    let ans = ""
  // Insert numeral from look up tables
    for (let i = 0; N; i++)
        while (N >= val[i]) ans += rom[i], N -= val[i]
    return ans
};
