/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class MyMinHeap {
    constructor() {
        this.heap = []
    }

    insert(val) {
        this.heap.push(val)
        this.heapifyUp(this.heap.length - 1)
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop() // base case

        const item = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)

        return item
    }

    heapifyDown(i) {
        const n = this.heap.length
        const left = this.left(i)
        const right = this.right(i)
        let minIndex = i

        if (left < n && this.heap[minIndex][1] > this.heap[left][1]) {
            minIndex = left
        }

        if (right < n && this.heap[minIndex][1] > this.heap[right][1]) {
            minIndex = right
        }

        if (minIndex !== i) {
            this.swap(minIndex, i)
            this.heapifyDown(minIndex)
        }
    }

    heapifyUp(i) {
        if (i === 0) return

        if (this.heap[i][1] < this.heap[this.parent(i)][1]) {
            this.swap(i, this.parent(i))
            this.heapifyUp(this.parent(i))
        }
    }

    // utils
    left(i) {
        return 2 * i + 1
    }

    right(i) {
        return 2 * i + 2
    }

    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
}

var topKFrequent = function(nums, k) {
    const minHeap = new MyMinHeap()
    const freq = new Map()

    for (let num of nums) {
        const count = freq.get(num) || 0
        freq.set(num, count + 1)
    }

    for (let [num, count] of freq) {
        minHeap.insert([num, count])

        if (minHeap.heap.length > k) {
            minHeap.extractMin()
        }
    }

    const res = []
    while (minHeap.heap.length > 0) {
        res.push(minHeap.extractMin()[0])
    }

    return res
};