/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const n = nums.length
    let set = new Set()
    let numsSet = new Set(nums)

    const result = [] 

    for (let i = 1; i <= n; i++) {
        if (set.has(nums[i - 1])) {
            result[0] = nums[i - 1] // duplicate
        }
        
        if (!numsSet.has(i)) {
            result[1] = i // missing number
        }

        set.add(nums[i - 1])
    }

    return result
};