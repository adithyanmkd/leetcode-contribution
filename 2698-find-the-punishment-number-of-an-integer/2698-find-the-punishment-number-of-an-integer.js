/**
 * @param {number} n
 * @return {number}
 */

const canPartition = (num, target) => {
    num = String(num)

    const backtrack = (start, sum) => {
        if (start === num.length) {
            return sum === target 
        }

        for (let i = start + 1; i <= num.length; i++) {
            const part = Number(num.slice(start, i))

            if (backtrack(i, sum + part)) {
                return true
            }

        }

        return false
    }

    return backtrack(0, 0)
}

var punishmentNumber = function(n) {
    let res = 0

    for (let i = 1; i <= n; i++) {
        let squre = i * i

        if (canPartition(squre, i)) {
            res += squre
        }
    }

    return res
};