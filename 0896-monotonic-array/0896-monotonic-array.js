/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    const n = nums.length
    const isIncrease = nums[0] < nums[n - 1]
    console.log('isIncrease: ', isIncrease)

    for (let i = 1; i < n; i++) {
        if (isIncrease) {
            // Increase scenario
            if (nums[i - 1] > nums[i]) {
                console.log('Increase', nums[i], nums[i - 1])
                return false
            }
        } else {
            // Decrease scenario
            if (nums[i - 1] < nums[i]) {
                console.log('Decrease', nums[i], nums[i - 1])
                return false
            }
        }
    }

    return true
};