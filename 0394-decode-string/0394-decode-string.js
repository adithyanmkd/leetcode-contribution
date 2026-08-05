/**
 * @param {string} s
 * @return {string}
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

        if (!this.head) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    peek() {
        return this.head ? this.head.val : undefined
    }

    pop() {
        if (!this.head) return

        const item = this.head.val
        this.head = this.head.next

        return item
    }

    isEmpty() {
        return this.head === null
    }

    print() {
        let res = ''

        let curr = this.head
        while (curr) {
            res += curr.val
            curr = curr.next
        }

        console.log(res)
    }
}
var decodeString = function (s) {
    const stack = new MyStack()
    let res = ''
    let build = ''

    for (let char of s) {
        if (char === '[') {
            stack.push(char)
            continue
        }

        if (char === ']') {
            while (stack.peek() !== '[') {
                build = stack.pop() + build
            }

            stack.pop() // remove '['

            let k = ''
            while (!stack.isEmpty() && /^\d$/.test(stack.peek())) {
                k = stack.pop() + k
            }

            stack.push(build.repeat(Number(k)))
            build = ''

            continue
        }

        stack.push(char)
    }

    let curr = stack.head
    while (curr) {
        res = stack.pop() + res
        curr = curr.next
    }

    return res
};