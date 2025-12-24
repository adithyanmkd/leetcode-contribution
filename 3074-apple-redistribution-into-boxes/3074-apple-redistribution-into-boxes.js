/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
    const totalApple = apple.reduce((val, acc) => val + acc)
    capacity = capacity.sort((a, b) => b - a)

    let sum = 0
    let count = 0
    for (let size of capacity) {
        if (sum >= totalApple) break

        sum += size
        count++
    }

    return count
};