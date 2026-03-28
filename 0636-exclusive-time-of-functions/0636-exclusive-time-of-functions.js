/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class CallStack {
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

    pop() {
        if (this.isEmpty()) return 

        const item = this.head.val
        this.head = this.head.next

        return item
    }

    top() {
        if (this.isEmpty()) return 
        return this.head.val
    }

    isEmpty() {
        return this.head === null
    }

    print() {
        let currNode = this.head
        let elements = ''

        while (currNode) {
            elements += currNode.val + ' -> '
            currNode = currNode.next
        }

        console.log(elements, 'null')
        return `${elements} null`
    }
}

var exclusiveTime = function(n, logs) {
    const stack = new CallStack()
    const executionTimes = new Array(n).fill(0)
    let prevStartTime = 0

    for (let log of logs) {
        let [functionId, callType, timestamp] = log.split(':')
        functionId = Number(functionId)
        timestamp = Number(timestamp)
        
        if (callType === "start") {
            if (!stack.isEmpty()) {
                executionTimes[stack.top()] += timestamp - prevStartTime
            }

            stack.push(functionId)
            prevStartTime = timestamp
        } else {
            executionTimes[stack.pop()] += timestamp - prevStartTime + 1
            prevStartTime = timestamp + 1
        }

    }

    return executionTimes
};