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


var swapPairs = function(head) {
    if (!head) return head
    let arr = []

    let curr = head
    while (curr) {
        arr.push(curr.val)
        curr = curr.next
    }

    for (let i = 1; i < arr.length; i += 2) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
    }

    const list = new MyLinkedList() 
    for (let val of arr) {
        list.insert(val)
    }

    console.log(list.head)
    return list.head
};