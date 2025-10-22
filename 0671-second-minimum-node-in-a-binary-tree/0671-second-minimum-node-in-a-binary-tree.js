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
var findSecondMinimumValue = function(root) {
    let smallest = Infinity
    let secondSmallest = -1

    const traverse = (root) => {
        if (!root) return // base case

        if (root.val < smallest) {
            secondSmallest = smallest
            smallest = root.val
        } else if (root.val < secondSmallest && root.val > smallest) {
            secondSmallest = root.val
        }

        if (root.left) {
            traverse(root.left)
        }

        if (root.right) {
            traverse(root.right)
        }
    }

    traverse(root)
    return secondSmallest === Infinity ? -1 : secondSmallest
};