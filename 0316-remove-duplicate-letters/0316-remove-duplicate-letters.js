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
        if (this.isEmpty()) return
        
        const element = this.head.val
        this.head = this.head.next
        
        return element
    }
    
    top() {
        if (this.isEmpty()) return 
        return this.head.val
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
        
        console.log(elements, 'null')
    }
}

var removeDuplicateLetters = function(s) {
    const freq = new Map()
    const seen = new Set()
    const stack = new MyStack()
    
    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1)
    }
    
    for (let char of s) {
        if (seen.has(char)) {
            freq.set(char, (freq.get(char) || 0) - 1)
            continue
        }
        
        while (
            !stack.isEmpty() && 
            stack.top() > char && 
            freq.get(stack.top()) > 0
        ) {
            const elm = stack.pop()
            seen.delete(elm)
        }
        
        stack.push(char)
        seen.add(char)
        freq.set(char, (freq.get(char) || 0) - 1)
    }
    
    
    let res = ""
    while (!stack.isEmpty()) {
        res = stack.pop() + res
    }
    
    console.log(res)
    return res
};