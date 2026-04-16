/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    let traverse = (s, fPos, lPos) => {
        if (fPos >= lPos) return // base case
        
        [s[fPos], s[lPos]] = [s[lPos], s[fPos]] // swapping
        
        traverse(s, fPos + 1, lPos - 1) // recursive call
    }
    
    traverse(s, 0, s.length - 1)
};