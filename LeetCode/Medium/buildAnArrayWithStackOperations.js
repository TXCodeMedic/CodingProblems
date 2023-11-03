/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */

// Runtime: 47ms, Beats 78.13% of JS users
// Memory: 41.74 mb, Beats 72.92% of JS users
function buildArray(target, n) {
    const targetSet = new Set(target);
    const result = [];

    for (let i = 1; i <= target[target.length - 1]; i++) {
        if (targetSet.has(i)) {
            result.push("Push");
        } else {
            result.push("Push");
            result.push("Pop");
        }
    }
    return result;
}
