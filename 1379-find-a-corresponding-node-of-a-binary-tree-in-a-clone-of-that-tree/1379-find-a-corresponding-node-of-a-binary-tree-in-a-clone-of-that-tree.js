/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let res = null
    
    const dfs = (node, clone) => {
        if (node == target) {
            res = clone
        }

        if (node.left) dfs(node.left, clone.left)
        if (node.right) dfs(node.right, clone.right)

    }

    dfs(original, cloned)
    
    return res
};