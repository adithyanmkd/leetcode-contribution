/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class MyLinkedList {
    constructor() {
        this.head = this.tail = null
    }

    insert(val) {
        const newNode = new Node(val)

        if (!this.head) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }
}

var modifiedList = function(nums, head) {
    nums = new Set(nums)
    const myList = new MyLinkedList()

    let curr = head
    while (curr) {
        if (!nums.has(curr.val)) {
            myList.insert(curr.val)
        }

        curr = curr.next
    }

    return myList.head
};