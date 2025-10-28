/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (!head || left === right) return head

    let dummy = { next: head }
    let prev = dummy

    for (let i = 1; i < left; i++) {
        prev = prev.next
    }

    let curr = prev.next
    let next = null
    let prevSub = null

    for (let i = left; i <= right; i++) {
        next = curr.next
        curr.next = prevSub
        prevSub = curr
        curr = next
    }

    prev.next.next = curr
    prev.next = prevSub

    return dummy.next
};