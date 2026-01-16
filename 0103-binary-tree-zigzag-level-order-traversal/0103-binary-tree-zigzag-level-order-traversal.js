class QueueNode {
    constructor (val) {
        this.val = val
        this.next = null
    }
}

class CustomQueue {
    constructor() {
        this.head = null
    }

    enqueue(val) {
        const newNode = new QueueNode(val)

        if(this.isEmpty()) {
            return this.head = newNode
        }

        let curr = this.head
        while (curr.next) {
            curr = curr.next
        }

        curr.next = newNode
    }

    dequeue() {
        if(this.isEmpty()) {
            return 
        }

        const item = this.head.val
        this.head = this.head.next

        return item
    }

    isEmpty() {
        return this.head === null
    }
}

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [] // base case

    const q = new CustomQueue()

    const result = []
    let direction = "left"
    q.enqueue(root)
    while(!q.isEmpty()) {
        let levelSize = 0
        let curr = q.head

        while (curr) {
            levelSize++
            curr = curr.next
        }

        const subArr = []

        for (let i = 0; i < levelSize; i++) {
            const node = q.dequeue()

            if (direction === "left") {
                subArr.push(node.val)
            } else { 
                subArr.unshift(node.val)
            }

            if(node.left) q.enqueue(node.left)
            if(node.right) q.enqueue(node.right)
        }

        result.push(subArr)
        direction = direction === "left" ? "right" : "left"
    }

    return result
};