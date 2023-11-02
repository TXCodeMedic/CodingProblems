/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Runtime: 54 ms, Beats 93.62% of JS users
// Memory: 47.1 mb, Beats 34.75% of JS users
var averageOfSubtree = function(root) {
    let ans = 0;
    function dfs(node) {
        if (node === null) return [0, 0];
        let [leftSum, leftCount] = dfs(node.left);
        let [rightSum, rightCount] = dfs(node.right);

        let sum = leftSum + rightSum + node.val;
        let count = leftCount + rightCount + 1;
        if (Math.floor(sum / count) === node.val) ans++;
        return [sum, count];
    }

    dfs(root);

    return ans;
};
