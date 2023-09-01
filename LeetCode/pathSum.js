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
 * @param {number} targetSum
 * @return {boolean}
 */
// Runtime: 59 ms, Beats 77.94% of JS users
// Memory: 45.2 mb, Beats 85.10% of JS users
var hasPathSum = function(root, targetSum) {
    // If the tree is empty i.e. root is NULL, return false...
	if (root === null) { return false; }
    // If there is only a single root node and the value of root node is equal to the targetSum...
	if (root.val == targetSum && (root.left == null && root.right == null)) { return true; }
    // Call the same function recursively for left and right subtree...
	return hasPathSum(root.left, targetSum - root.val)|| hasPathSum(root.right, targetSum - root.val);
};
