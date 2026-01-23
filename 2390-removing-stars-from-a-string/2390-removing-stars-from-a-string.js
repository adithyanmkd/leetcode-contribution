/**
 * @param {string} s
 * @return {string}
 */

class Node {
    constructor(val) {
        this.val = val
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
        if (!this.head) return

        const item = this.head.val
        this.head = this.head.next ?? null

        return item
    }

    isEmpty() {
        return this.head === null
    }

    print() {
        let curr = this.head
        let elements = ''

        while (curr) {
            elements += curr.val + ' -> '
            curr = curr.next
        }

        console.log(elements + 'null')
    }
}
var removeStars = function(s) {
    const stack = new MyStack()
    
    for (let char of s) {
        if (char === '*') {
            stack.pop()
            continue
        }

        stack.push(char)
    }

    let res = ''
    while (!stack.isEmpty()) {
        res = stack.pop() + res
    }

    return res
};






