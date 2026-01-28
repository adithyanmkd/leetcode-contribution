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
var findMode = function(root) {
    const freq = new Map()
    
    const traverse = (root) => {
        if (!root) return

        const curr = root.val
        freq.set(curr, (freq.get(curr) || 0) + 1)

        traverse(root.left)
        traverse(root.right)
    }

    traverse(root)
    const arr = [...freq.entries()].sort((a, b) => b[1] - a[1])
    const res = []
    const maxFreq = arr[0][1]

    if (arr.length === 1) return [arr[0][0]]

    const n = arr.length
    for (let i = 0; i < n; i++) {
        if (arr[i][1] === maxFreq) {
            res.push(arr[i][0])
        } else {
            break
        }
    }

    return res
};