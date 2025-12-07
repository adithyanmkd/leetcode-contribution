
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class MyQueue {
    constructor() {
        this.head = this.tail = null
        this.length = 0
    }

    enqueue(val) {
        const newNode = new Node(val)
        
        if (!this.head) {
            this.head = this.tail = newNode
            this.length++
        } else {
            this.tail.next = newNode
            this.tail = newNode
            this.length++
        }
    }

    dequeue(val) {
        if (this.isEmpty()) return 

        const item = this.head.val
        this.head = this.head.next
        this.length--

        return item
    }

    isEmpty() {
        return this.head === null
    }

    print() {
        let result = ''
        let currNode = this.head

        while (currNode) {
            result += currNode.val + ' -> '
            currNode = currNode.next
        }

        console.log(result + 'null')
    }
}

class RecentCounter {
    constructor() {
        this.times = new MyQueue()
    }

    ping(t) {
        this.times.enqueue(t)

        let currNode = this.times.head
        while (currNode && currNode.val < t - 3000) {
            this.times.dequeue()
            currNode = currNode.next
        }

        return this.times.length
    }
}

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */