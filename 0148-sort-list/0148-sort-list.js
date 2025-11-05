/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head) return head
    const headArr = []

    let curr = head
    while (curr) {
        headArr.push(curr.val)
        curr = curr.next
    }

    headArr.sort((a, b) => a - b)

    let pos = 0
    curr = head

    while (curr) {
        curr.val = headArr[pos]
        curr = curr.next
        pos++
    }

    return head
};