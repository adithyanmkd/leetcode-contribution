
var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)

    let minSize = this.minStack.length
    if(this.minStack.length === 0 || this.minStack[minSize - 1] >= val){
        this.minStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.minStack[this.minStack.length - 1] === this.stack[this.stack.length - 1]){
        this.minStack.pop()
    }
    
    if(this.stack.length !== 0){
        this.stack.pop()
    }

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length !== 0){
        return this.stack[this.stack.length - 1]
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */