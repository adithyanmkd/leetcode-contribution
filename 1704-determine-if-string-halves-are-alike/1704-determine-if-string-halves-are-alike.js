/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const n = s.length
    const [first, second] = [s.slice(0, n / 2), s.slice(n / 2, n)]
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let [countA, countB] = [0, 0]

    for (let i = 0; i < n / 2; i++) {
        if (vowels.has(first[i].toLowerCase())) {
            countA++
        }

        if (vowels.has(second[i].toLowerCase())) {
            countB++
        }
    }

    console.log(countA, countB)
    return countA === countB
};