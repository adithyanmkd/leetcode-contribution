/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    const arrayLength = nums.length
    const ranges = []
    const formatRange = (i, j) => {
        return i === j ? `${nums[i]}` : `${nums[i]}->${nums[j]}`
    }

    let currentIndex = 0
    while (currentIndex < arrayLength) {
        let rangeEndIndex = currentIndex

        while (
            rangeEndIndex + 1 < arrayLength && 
            nums[rangeEndIndex + 1] === nums[rangeEndIndex] + 1
        ) {
            rangeEndIndex++
        }

        ranges.push(formatRange(currentIndex, rangeEndIndex))
        currentIndex = rangeEndIndex + 1
    }

    console.log(ranges)
    return ranges
};