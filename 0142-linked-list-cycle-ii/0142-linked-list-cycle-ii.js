/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) return null

    let slowNode = head
    let fastNode = head
    let meet = false

    while ((slowNode && slowNode.next !== null) && (fastNode && fastNode.next !== null)) {
        slowNode = slowNode.next
        fastNode = fastNode.next.next

        if (slowNode === fastNode) {
            meet = true
            break
        }
    }

    if (meet) {
        slowNode = head

        while (slowNode !== fastNode) {
            slowNode = slowNode.next
            fastNode = fastNode.next
        }

        return slowNode
    } else {
        return null
    }
};