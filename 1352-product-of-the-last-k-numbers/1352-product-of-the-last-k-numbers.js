class ProductOfNumbers {
    constructor() {
        this.stack = []
    }

    getProduct(k) {
        const n = this.stack.length
        let res = this.stack.at(-1)
        
        for (let i = n - 2; i >= (n - k); i--) {
            res *= this.stack[i]
        }

        return res
    }

    add(num) {
        this.stack.push(num)
    }
}


