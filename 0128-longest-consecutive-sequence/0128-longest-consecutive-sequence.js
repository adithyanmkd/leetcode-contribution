/**
 * @param {number[]} nums
 * @return {number}
 */

class HashSet {
    constructor(size = 100) {
        this.buckets = new Array(size).fill(null).map(() => [])
        this.size = size
        this.length = 0
    }

    add(val) {
        const index = this._hash(val) 
        const bucket = this.buckets[index]

        if (!bucket.includes(val)) {
            bucket.push(val)
            this.length++
        }
    }

    has(val) {
        const index = this._hash(val)
        const bucket = this.buckets[index]

        return bucket.includes(val)
    }

    remove(val) {
        const index = this._hash(val)
        const bucket = this.buckets[index]
        const i = bucket.indexOf(val)

        if (i !== -1) {
            bucket.splice(i, 1)
            this.length--
        }
    }

    _hash(key) {
        const str = String(key)
        let hash = 0

        for (let i = 0; i < str.length; i++) {
            hash = (hash * 31 + str.charCodeAt(i)) % this.size
        }

        return hash
    }
}

var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0
    // find smallest 
    // add all values into set
    // check curr + 1 value has in set
    // increat count

    const n = nums.length
    const set = new Set()

    for (let num of nums) {
        set.add(num)
    }

    let length = 0
    for (let num of set) {
        if (!set.has(num - 1)) {
            let curr = num
            let currLength = 1

            while (set.has(curr + 1)) {
                currLength++
                curr++
            }

            length = Math.max(length, currLength)
        }
    }

    return length
};