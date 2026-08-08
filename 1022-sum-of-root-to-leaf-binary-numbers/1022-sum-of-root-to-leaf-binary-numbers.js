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
var sumRootToLeaf = function(root) {
    const values = []

    const dfs = (root, str = '') => {
        if (!root) return 

        str += root.val
        if (!root.left && !root.right) {
            values.push(str)
        }

        dfs(root.left, str)
        dfs(root.right, str)
    }

    dfs(root)
    const sum = values.reduce((acc, val) => parseInt(val, 2) + acc, 0)

    return sum
};