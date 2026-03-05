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
var getMinimumDifference = function(root) {
    const arr = []

    const dfs = (root) => {
        if (!root) return 

        if (root.left) dfs(root.left)
        if (root.right) dfs(root.right)

        arr.push(root.val)
    }

    dfs(root)
    arr.sort((a, b) => a - b)

    const n = arr.length
    let minDiff = Infinity

    for (let i = 1; i < n; i++) {
        const currDiff = Math.abs(arr[i] - arr[i - 1])
        minDiff = Math.min(currDiff, minDiff)
    }

    return minDiff
};