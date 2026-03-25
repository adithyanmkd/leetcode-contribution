/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    const nums = Array.from(String(num), (n) => Number(n))
    const n = nums.length

    let largest = num

    for (let i = 0; i < n; i++) {
        if (nums[i] === 6) {
            nums[i] = 9
            
            const newNumber = Number(nums.join(''))
            if (newNumber > largest) {
                largest = newNumber
                nums[i] = 6
            }
        }
    }

    return largest
};