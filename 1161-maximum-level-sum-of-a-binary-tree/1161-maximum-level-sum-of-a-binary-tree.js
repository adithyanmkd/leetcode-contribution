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

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class MyQueue {
    constructor() {
        this.head = this.tail = null
    }

    enqueue(val) {
        const newNode = new Node(val)

        if (!this.head) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    dequeue() {
        if (this.isEmpty()) return 

        const item = this.head.val
        this.head = this.head.next

        return item
    }

    isEmpty() {
        return this.head === null
    }

    print() {
        let elements = ''
        let curr = this.head

        while (curr) {
            elements += curr.val + ' -> '
            curr = curr.next
        }

        console.log(elements)
    }
}

var maxLevelSum = function(root) {
    let max = -Infinity
    let level = 1
    let maxLevel = null

    const q = new MyQueue()
    q.enqueue(root)

    while (!q.isEmpty()) {
        let levelSize = 0
        let levelSum = 0
        let current = q.head

        while (current) {
            levelSize++
            current = current.next
        }

        for (let i = 0; i < levelSize; i++) {
            const node = q.dequeue()
            levelSum += node.val

            if (node.left) q.enqueue(node.left)
            if (node.right) q.enqueue(node.right)
        }

        if (levelSum > max) {
            max = levelSum
            maxLevel = level 
        }

        level++
    }

    return maxLevel
};