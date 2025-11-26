/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if (arr.length === 0) return arr // base case
    const n = arr.length

    const chunkArr = []
    for (let i = 0; i < n; i += size) {
        const chunk = arr.slice(i, i + size)
        chunkArr.push(chunk)
    }

    console.log(chunkArr)
    return chunkArr
};
