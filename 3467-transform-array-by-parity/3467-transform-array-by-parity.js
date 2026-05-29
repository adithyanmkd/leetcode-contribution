/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let size = nums.length

    const result = nums.map((val, index) => {
        return val % 2 == 0 ?  0 :  1;
    })

    return result.sort((a, b) => a - b)
};