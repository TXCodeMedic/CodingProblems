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
 * @return {number[]}
 */

// Runtime: 61 ms, Beats 90.80% of JS users
// Memory: 52.08 mb, Beats 8.79% of JS users
var findMode = function(root) {
    if (!root) return null;

    const queue = [root];
    const modes = {};

    while (queue.length > 0) {
        const currNode = queue.shift();
        modes[currNode.val] = modes[currNode.val] ? modes[currNode.val] + 1 : 1;
        if (currNode.left) queue.push(currNode.left);
        if (currNode.right) queue.push(currNode.right);
    }

    const maxInt = Math.max(...Object.values(modes))
    return Object.keys(modes).filter((key) => modes[key] === maxInt);
};
