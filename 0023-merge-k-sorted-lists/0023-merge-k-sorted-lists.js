/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null
    if (lists.length === 1) return lists[0]

    const minHeap = new MyMinHeap()

    for (let list of lists) {
        let curr = list

        while (curr) {
            minHeap.insert(curr.val)
            curr = curr.next
        }
    }

    const linkedList = new MyLinkedList()

    while (minHeap.size() > 0) {
        linkedList.insert(minHeap.extractMin())
    }

    return linkedList.head
};

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

class MyMinHeap {
    constructor() {
        this.heap = []
    }

    insert(val) {
        this.heap.push(val)
        this.heapifyUp(this.heap.length - 1)
    }

    peek() {
        return this.heap[0]
    }

    extractMin() {
        if (this.heap.length === 0) return
        if (this.heap.length === 1) return this.heap.pop()

        const item = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)

        return item
    }

    heapifyDown(i) {
        const n = this.heap.length
        let minIndex = i 
        const left = this.left(i)
        const right = this.right(i)

        if (left < n && this.heap[left] < this.heap[minIndex]) {
            minIndex = left
        }

        if (right < n && this.heap[right] < this.heap[minIndex]) {
            minIndex = right
        }

        if (minIndex !== i) {
            this.swap(minIndex, i)
            this.heapifyDown(minIndex)
        }
    }

    heapifyUp(i) {
        if (this.heap[i] < this.heap[this.parent(i)]) {
            this.swap(i, this.parent(i))
            this.heapifyUp(this.parent(i))
        }
    }

    // utils
    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    left(i) {
        return 2 * i + 1
    }

    right(i) {
        return 2 * i + 2
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    size() {
        return this.heap.length
    }
}
