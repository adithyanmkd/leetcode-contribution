/**
 * @param {string} text
 * @return {number}
 */

class HashMap{
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

    delete(key) {
        const index = this._hash(key)
        const bucket = this._buckets[index]

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                this.length--
                bucket.splice(i, 1)
            }
        }
    }

    print() {
        let elements = []

        for (let bucket of this.buckets) {
            if (bucket.length === 0) continue

            for (let i = 0; i < bucket.length; i++) {
                const elm = `'${bucket[i][0]}' => ${bucket[i][1]}`
                elements.push(elm)
            }
        }

        console.log(`Map(${this.length}) {${elements.join(', ')}}`)
    }

    _hash(val) {
        let str = String(val)
        let hash = 0

        for (let i = 0; i < str.length; i++) {
            hash = (hash + 31 * str.charCodeAt(i)) % this.size
        }

        return hash
    }

}
var maxNumberOfBalloons = function(text) {
    const map = new Map()
    const word = 'balloon'

    if (text.length < word.length) return 0

    let pos = 0
    let count = 0

    for (let char of text) {
        if (word.includes(char)) {
            map.set(char, (map.get(char) || 0) + 1)
        }
    }

    while (true) {
        let isFound = false
        const char = word[pos]

        if (map.has(char)) {
            const freq = map.get(char) - 1
            map.set(char, freq)

            if (freq === 0) {
                map.delete(char)
            }

            pos++
            isFound = true
        }

        if (pos === 7) {
            pos = 0
            count++
        }

        if (!isFound)  break
    }

    return count
};