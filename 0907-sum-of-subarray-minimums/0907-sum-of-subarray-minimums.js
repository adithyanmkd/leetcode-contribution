/**
 * @param {number[]} arr
 * @return {number}
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

        if (this.isEmpty()) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    pop() {
        if (this.isEmpty()) return 

        const element = this.head.val
        this.head = this.head.next

        return element
    }

    top() {
        if (this.isEmpty()) return false

        return this.head.val
    }

    isEmpty() {
        return this.head === null
    }
}
var sumSubarrayMins = function(arr) {
    const n = arr.length
    const MOD = 10 ** 9 + 7
    const stack = new MyStack()
    res = 0

    for (let i = 0; i <= n; i++) {
        const curVal = i < n ? arr[i] : 0

        while (!stack.isEmpty() && curVal < stack.top()[1]) {
            const [idx, val] = stack.pop()

            const left = stack.isEmpty()
                ? idx + 1
                : idx - stack.top()[0]
            const right = i - idx

            res = (res + val * left * right) % MOD
        }

        stack.push([i, curVal])
    }

    return res
};