/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    const n = s.length

    let currentWidth = 0, lines = 0
    for (let i = 0; i < n; i++) {
        const pos = s[i].charCodeAt(0) - 97 // fetch position in 0 indexed array
        const pixel = widths[pos]

        if (i === n - 1) lines++
        
        if (currentWidth <= 100 && currentWidth + pixel <= 100) {
            currentWidth += pixel
            continue
        }

        currentWidth = pixel
        lines++
    }

    console.log(lines, currentWidth)
    return [lines, currentWidth]
};