/**
 * @param {number[]} nums
 * @return {number}
 */

class HashMap {
    constructor(size = 100) {
        this.buckets = new Array(size).fill(null).map(() => [])
        this.size = size
        this.length = 0 
    }

    set(key, val) {
        const index = this._hash(key)
        const bucket = this.buckets[index]  

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = val
                return
            }
        }

        this.length++
        bucket.push([key, val])
    }

    get(key) {
        const index = this._hash(key)
        const bucket = this.buckets[index]

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1]
            }
        }

        return undefined
    }

    has(key) {
        const index = this._hash(key)
        const bucket = this.buckets[index]

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return true
            }
        }

        return false
    }

    delete(key) {
        const index = this._hash(key)
        const bucket = this.buckets[index]

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1)
                return true
            }
        }

        return false
    }

    print() {
        const entries = []

        for (let bucket of this.buckets) {
            if (bucket.length === 0) {
                continue
            }

            for (let [key, val] of bucket) {
                entries.push(`'${key}' => ${val}`)
            }
        }

        console.log(`Map(${this.length}) ${entries.join(', ')}`)
    }

    _hash(val) {
        let str = String(val)
        let hash = 0

        for (let i = 0; i < str.length; i++) {
            hash = (hash * 31 + str.charCodeAt(i)) % this.size
        }

        return hash
    }
}



var majorityElement = function(nums) {
    const n = nums.length
    const majorityCount = Math.floor(n / 2)
    const freq = new HashMap()
    
    for (let num of nums) {
        const currentCount = freq.get(num) || 0
        freq.set(num, currentCount + 1)

        if (freq.get(num) > majorityCount) {
            return num
        }
    }
};