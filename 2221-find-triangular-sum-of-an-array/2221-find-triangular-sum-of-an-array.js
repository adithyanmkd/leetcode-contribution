/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
    // [1,2,3,4,5]
    // 3, 5, 7, 9
    // 8, 2, 6
    // 0, 8
    // 8

    const n = nums.length
    
    for (let i = 0; i < nums.length; i++) {
        let sub = []

        for (let j = 0; j < nums.length - 1; j++) {
            let sum = nums[j] + nums[j + 1]

            if (sum > 10) {
                sum = sum % 10
            }

            sub.push(sum)
        }

        if (sub.length) {
            nums = sub
        }

        i = 0
    }

    console.log(nums)
    return nums[0] >= 10 ? nums[0] % 10 : nums[0]
};