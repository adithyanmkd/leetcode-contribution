/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    const n = num.length
    let goodPair = []
    let substring = ""

    for (let i = 0; i < n; i++) {
        if (i + 2 > n) break
        const firstElm = num[i]
        const secondElm = num[i + 1]
        const thirdElm = num[i + 2]

        if (firstElm === secondElm && secondElm === thirdElm) {
            const window = firstElm + secondElm + thirdElm
            goodPair.push(window)
        }
    }

    if (goodPair.length === 0) return ""

    let largest = -Infinity
    let index = null

    for (let i = 0; i < goodPair.length; i++) {
        const firstNum = Number(goodPair[i][0])
        if (firstNum > largest) {
            largest = firstNum
            index = i
        }
    }

    return goodPair[index]
};