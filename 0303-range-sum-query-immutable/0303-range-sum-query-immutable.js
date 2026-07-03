class NumArray {
    constructor(nums) {
        this.nums = nums
        this.prefixArr = new Array(nums.length)
        this.createPrefixSum()

    }

    createPrefixSum() {
        const n = this.nums.length
        this.prefixArr[0] = this.nums[0]

        for (let i = 1; i < n; i++) {
            this.prefixArr[i] = this.prefixArr[i - 1] + this.nums[i]
        }

    }

    sumRange(left, right) {
        if (left === 0) return this.prefixArr[right]

        const result = this.prefixArr[right] - this.prefixArr[left - 1]
        return result
    }
}