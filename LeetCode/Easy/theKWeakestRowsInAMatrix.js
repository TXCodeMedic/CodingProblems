/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

// Runtime: 44 ms, Beats 97.70% of JS users
// Memory: 44.22 mb, Beats 51.32% of JS users
var kWeakestRows = function(mat, k) {
    // Since matrix is binary, calculate row strength as the sum of elements
    const strength = mat.map((row, index) => [row.reduce((a, b) => a + b), index]);
    
    // Sort based on strength and index
    strength.sort(([aSum, aIndex], [bSum, bIndex]) => aSum - bSum || aIndex - bIndex);
    
    // Extract the first k indices
    return strength.slice(0, k).map(([_, index]) => index);
};
