/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length
    const answer = new Array(n).fill(0)
    const stack = []

    for (let i in temperatures) {
        let t = temperatures[i] // temperature

        while (stack.length > 0 && t > stack.at(-1)[1]) {
            const [stackIdx, stackT] = stack.pop()
            answer[stackIdx] = i - stackIdx
        }

        stack.push([i, t])
        console.log(stack.at(-1)[0])
    }

    return answer
};