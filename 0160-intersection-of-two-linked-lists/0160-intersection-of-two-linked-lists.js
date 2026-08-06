/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let set = new Set()
    let currA = headA
    let currB = headB

    while (currA) {
        set.add(currA)
        currA = currA.next
    }

    while (currB) {
        if (set.has(currB)) {
            return currB
        }

        set.add(currB) 
        currB = currB.next
    }
};