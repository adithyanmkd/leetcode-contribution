/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const n = s.length
    let words = ''
    
    let build = ''
    for (let i = 0; i < n; i++) {
        if ((s[i] === ' ' && build.length > 0) || i === n - 1) {
            if (i === n - 1) build += s[i]
            
            words = build + ' ' + words
            build = ''
        }
        
        if (s[i] === ' ') continue
        build += s[i]
    }
    
    return words.trim()
};