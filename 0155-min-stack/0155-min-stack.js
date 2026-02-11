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

    pop() {
        if (!this.isEmpty()) {
            this.head = this.head.next
        }
    }

    top() {
        return this.head.val
    }

    // -------- helpers --------

    isEmpty() {
        return this.head === null
    }
}

var MinStack = function() {
    this.stack = new MyStack()
    this.minStack = new MyStack()
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)

    if (this.minStack.isEmpty() || this.minStack.head.val >= val) {
        this.minStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.minStack.head.val === this.stack.head.val) {
        this.minStack.pop()
    }

    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.top()
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack.head.val
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

