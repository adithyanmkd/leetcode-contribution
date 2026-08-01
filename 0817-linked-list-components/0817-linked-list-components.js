/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
    const set = new Set(nums)
    let curr = head
    let connections = 0

    let conn = 0
    while (curr) {
        if (set.has(curr.val)) {
            conn = 1
        }

        if (!set.has(curr.val)) {
            if (conn === 1) {
                conn = 0
                connections++
            }
        }
        curr = curr.next
    }

    if (conn === 1) {
        connections++
    }

    return connections
};