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

// Runtime: 60 ms, Beats 71.40% of JS users
// Memory: 44.82 mb, Beats 80.22% of JS users
var maxDepth = function(root) {
    if(!root) return null;
    
    let max = Math.max(maxDepth(root.left), maxDepth(root.right));
    return max + 1;
};
