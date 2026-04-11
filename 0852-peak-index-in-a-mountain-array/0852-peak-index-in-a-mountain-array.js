/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    const n = arr.length

    let left = 0
    let right = n - 1

    while (left < right) {
        if (arr[left + 1] > arr[left]) {
            left++
        }

        if (arr[right - 1] > arr[right]) {
            right--
        }
    }

    return left
};