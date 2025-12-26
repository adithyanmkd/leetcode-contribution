/**
 * @param {number[]} nums1
 * @param {number[]} nums2
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
        if (this.isEmpty) return
        return this.head.val
    }

    print() {
        let elements = ''
        let currNode = this.head

        while(currNode) {
            elements += currNode.val + ' -> '
            currNode = currNode.next
        }

        console.log(elements, 'null')
    }

    get isEmpty() {
        return this.head === null
    }
}

var nextGreaterElement = function(nums1, nums2) {
    const n = nums2.length
    const stack = new MyStack()
    const nge = new Array(n).fill(-1) // next greater element (num2)
    const map = new Map()
    const answer = []

    for (let i = 0; i < n; i++) {
        const current = nums2[i]

        while (!stack.isEmpty && current > nums2[stack.top()]) {
            const index = stack.top()
            nge[index] = current
            stack.pop()
        }

        stack.push(i)
    }

    for (let i = 0; i < n; i++) {
        map.set(nums2[i], nge[i])
    }

    for (let num of nums1) {
        answer.push(map.get(num))
    }

    return answer
};