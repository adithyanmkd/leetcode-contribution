/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const n = s.length
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    const vMap = new Map() //  for vowel freq 
    const cMap = new Map() // for consonant freq

    let vMax = -Infinity // vowel max
    let cMax = -Infinity // cosonant max

    for (let i = 0; i < n; i++) {
        const char = s[i]

        if (vowels.has(char)) {
            vMap.set(char, (vMap.get(char) || 0) + 1)
            const freq = vMap.get(char)

            if (freq && freq > vMax) {
                vMax = freq
            }
            continue
        }

        cMap.set(char, (cMap.get(char) || 0) + 1)
        const freq = cMap.get(char)

        if (freq && freq > cMax) {
            cMax = freq
        }
    }

    const result = Math.max(0, vMax) + Math.max(0, cMax)
    return result
};