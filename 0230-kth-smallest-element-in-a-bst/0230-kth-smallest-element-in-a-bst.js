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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const elements = []

    const dfs = (root) => {
        if (!root) return

        elements.push(root.val)
        if (root.left) dfs(root.left)
        if (root.right) dfs(root.right)
    }

    dfs(root)
    elements.sort((a, b) => a - b)
    console.log(elements)
    return elements[k - 1]
};