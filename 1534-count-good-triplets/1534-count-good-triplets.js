/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    const n = arr.length
    let count = 0

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                const condition_1 = Math.abs(arr[i] - arr[j]) <= a
                const condition_2 = Math.abs(arr[j] - arr[k]) <= b
                const condition_3 = Math.abs(arr[i] - arr[k]) <= c

                if (condition_1 && condition_2 && condition_3) {
                    count++
                }
            }
        }
    }

    return count
};