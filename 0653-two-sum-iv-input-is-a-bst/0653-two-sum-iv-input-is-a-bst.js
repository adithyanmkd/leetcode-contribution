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
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const arr = []

    const dfs = (root) => {
        if (!root) return 
        if (root.left) dfs(root.left)
        if (root.right) dfs(root.right)

        arr.push(root.val)
    }

    dfs(root)
    console.log(arr)
    const set = new Set()

    for (let num of arr) {
        const bal = k - num

        if (set.has(bal)) {
            return true
        }

        set.add(num)
    }

    return false
};