/**
 * @param {number[]} nums
 * @return {number[]}
 */

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class MyStack {
    constructor() {
        this.head = null
    }

    push(val) {
        const newNode = new Node(val)

        if (this.isEmpty) {
            this.head = newNode 
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    pop() {
        if (this.isEmpty) return

        const item = this.head.val
        this.head = this.head.next

        return item
    }

    top() {
        if (!this.isEmpty) return this.head.val
    }

    get isEmpty() {
        return this.head === null
    }
}

var nextGreaterElements = function(nums) {
    const n = nums.length
    const stack = new MyStack()
    const nge = new Array(n).fill(-1) // next greater element array

    for (let i = 0; i < 2 * n; i++) {
        const current = nums[i % n]
        console.log(current)

        while (!stack.isEmpty && current > nums[stack.top()]) {
            const index = stack.pop()
            nge[index] = current
        }

        if (i < n) {
            stack.push(i)
        }
    }

    console.log(nge)
    return nge
};