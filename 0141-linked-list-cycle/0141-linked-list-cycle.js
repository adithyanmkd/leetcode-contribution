/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const map = new Map()

    let curr = head
    while (curr) {
        if (map.get(curr) === curr.next) {
            return true
        }

        map.set(curr, curr.next)
        curr = curr.next
    }

    return false
};