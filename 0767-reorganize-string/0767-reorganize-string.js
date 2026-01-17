/**
 * @param {string} s
 * @return {string}
 */

class MyMaxHeap {
    constructor() {
        this.heap = []
        this.length = 0
    }

    insert(val) {
        this.heap.push(val)
        this.length++
        this.heapifyUp()
    }

    extractMax() {
        if (this.heap.length === 0) return 
        if (this.heap.length === 1) {
            this.length--
            return this.heap.pop()
        }

        const maxValue = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.length--

        this.heapifyDown(0)
        return maxValue
    }

    heapifyDown(i) {
        const n = this.heap.length
        let maxIndex = i
        let left = this.left(i)
        let right = this.right(i)

        if (left < n && this.heap[left][1] > this.heap[maxIndex][1]) {
            maxIndex = left
        }

        if (right < n && this.heap[right][1] > this.heap[maxIndex][1]) {
            maxIndex = right
        }

        if (maxIndex !== i) {
            this.swap(maxIndex, i)
            this.heapifyDown(maxIndex)
        }
    }


    heapifyUp() {
        const n = this.heap.length
        let i = n - 1 // last inserted element's index

        while (i > 0 && this.heap[i][1] > this.heap[this.parent(i)][1]) {
            const p = this.parent(i) // current parent
            this.swap(p, i) // swap current parent into current index
            i = p 
        }
    }

    // helpers 👇🏻 
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

var reorganizeString = function(s) {
    const n = s.length
    const freq = new Map()

    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1)

        // If there is some character c with freq(c)>(n+1)/2 then it is impossible
        if (freq.get(char) > Math.floor((n + 1) / 2)) {
            return ""
        }
    }

    const heap = new MyMaxHeap()
    for (let [char, count] of freq.entries()) {
        heap.insert([char, count])
    }

    let prev = null
    let res = ''
    while (heap.length > 0) {
        let [char, count] = heap.extractMax()
        res += char
        count--

        // push previous back into heap
        if (prev) {
            heap.insert(prev)
            prev = null
        }

        if (count > 0) {
            // prev holds the previously used character
            // It is not allowed to be reused in the next step
            prev = [char, count]
        }
    }

    return res
};