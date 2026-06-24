/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    const n = nums.length
    let maxAvg = -Infinity
    const prefixSum = new Array(n)

    prefixSum[0] = nums[0]
    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i]
    }

    for (let i = 0; i < n; i++) {
        if (k + i > n) break

        if (i === 0) {
            const total = prefixSum[(k-1) + i]
            const avg = total / k

            if (avg > maxAvg) {
                maxAvg = avg
            }
            continue
        }

        const total = prefixSum[(k-1) + i] - prefixSum[i - 1]
        const avg = total / k

        if (avg > maxAvg) {
            maxAvg = avg
        }
    }

    return maxAvg
};