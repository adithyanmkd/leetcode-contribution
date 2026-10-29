/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
    const n = nums.length
    let evenSum = 0
    let oddSum = 0

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            evenSum += nums[i]
        } else {
            oddSum += nums[i]
        }
    }

    let leftEvenSum = 0
    let leftOddSum = 0
    let fairCount = 0

    for (let i = 0; i < n; i++) {
        const currValue = nums[i]

        // When removing element at even index:
        // New even sum = leftEvenSum + (oddSum - leftOddSum)
        // New odd sum = leftOddSum + (evenSum - leftEvenSum - currentValue)
        if (i % 2 === 0) {
            let newEvenSum = leftEvenSum + (oddSum - leftOddSum)
            let newOddSum = leftOddSum + (evenSum - leftEvenSum - currValue)

            if (newEvenSum === newOddSum) {
                fairCount++
            }
        }

        // When removing element at odd index:
        // New even sum = leftEvenSum + (oddSum - leftOddSum - currentValue)
        // New odd sum = leftOddSum + (evenSum - leftEvenSum)
        if (i % 2 === 1) {
            let newEvenSum = leftEvenSum + (oddSum - leftOddSum - currValue)
            let newOddSum = leftOddSum + (evenSum - leftEvenSum)

            if (newEvenSum === newOddSum) {
                fairCount++
            }
        }

        if (i % 2 === 0) {
            leftEvenSum += nums[i]
        } else {
            leftOddSum += nums[i]
        }
    }

    console.log(fairCount)
    return fairCount
};