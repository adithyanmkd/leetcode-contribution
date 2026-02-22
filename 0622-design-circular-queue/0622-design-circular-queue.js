/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.items = []
    this.front = 0
    this.back = -1
    this.length = 0
    this.size = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.length >= this.size) return false
    
    this.back++
    this.items[this.back % this.size] = value
    this.length++
    
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return false
    
    this.items[this.front % this.size] = null
    this.front++
    this.length--
    
    return true
    
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) return -1
    
    return this.items[this.front % this.size]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) return -1
    
    return this.items[this.back % this.size]
    
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.length === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.size === this.length
};