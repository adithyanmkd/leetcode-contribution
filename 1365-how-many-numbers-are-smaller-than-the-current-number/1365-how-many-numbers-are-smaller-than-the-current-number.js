/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const n = nums.length
    const result = []

    for (let i = 0; i < n; i++) {
        let count = 0

        for (let j = 0; j < n; j++) {
            if (j !== i && nums[j] < nums[i]) {
                count++
            }
        }

        result[i] = count
    }

    console.log(result)
    return result
};