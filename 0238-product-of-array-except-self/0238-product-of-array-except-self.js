/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length
    const prefixSum = []
    const postfixSum = []

    prefixSum[0] = nums[0]
    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] * nums[i]
    }

    postfixSum[n - 1] = nums[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        postfixSum[i] = postfixSum[i + 1] * nums[i]
    }
    
    console.log('prefix:', prefixSum)
    console.log('postfix:', postfixSum)

    for (let i = 0; i < n; i++) {
        if (i === n - 1) {
            nums[i] = prefixSum[i - 1]
            continue
        }

        if (i === 0) {
            nums[i] = postfixSum[i + 1]
            continue
        }

        nums[i] = prefixSum[i - 1] * postfixSum[i + 1]
    }

    console.log(nums)
    return nums
};