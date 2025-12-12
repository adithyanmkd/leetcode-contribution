class MySet {
    constructor(size = 100) {
        this.buckets = new Array(size).fill(null).map(() => [])
        this.size = size
    }

    add(val) {
        const index = this.#hash(val)
        const bucket = this.buckets[index]

        if (!bucket.includes(val)) {
            bucket.push(val)
        }
    }

    has(val) {
        const index = this.#hash(val)
        const bucket = this.buckets[index]

        return bucket.includes(val)
    }

    #hash(val) {
        const str = String(val)
        let hash = 0

        for (let i = 0; i < str.length; i++) {
            hash = (hash * 31 + str.charCodeAt(i)) % this.size
        }

        return hash
    }
}



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length
    const set = new MySet()
    const result = []
    let end = Math.max(...nums)

    if (n > end) {
        end = n
    }

    for (let num of nums) {
        set.add(num)
    }

    for (let i = 1; i <= end; i++) {
        if (!set.has(i)) {
            result.push(i)
        }
    }

    console.log(result)
    return result

};