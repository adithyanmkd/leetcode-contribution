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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true
    
    function isBalanceRec (root) {
        if (!root) return 0

        let lHeight = isBalanceRec(root.left)
        let rHeight = isBalanceRec(root.right)

        if (lHeight === -1 || rHeight === -1 || Math.abs(lHeight - rHeight) > 1) {
            return -1
        }

        return Math.max(lHeight, rHeight) + 1
    }

    let result = isBalanceRec(root) > 0

    return result
};