/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    // const n = nums.length
    // let distance = 0

    // for (let i = 0; i < n; i++) {
    //     if (nums[i] === 1 && i !== 0) {
    //         if (distance < k) {
    //             return false
    //         }

    //         distance = 0
    //     } 
    //     if (nums[i] === 0) {
    //         distance++
    //     }
    // }

    // return true
    const n = nums.length
    let prev = -1

    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) {
            if (prev !== -1 && i - prev - 1 < k) {
                return false
            }

            prev = i
        }
    }

    return true
};