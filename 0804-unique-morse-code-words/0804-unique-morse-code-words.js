/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const chars = [
        ".-","-...","-.-.","-..",".",
        "..-.","--.","....","..",".---",
        "-.-",".-..","--","-.","---",".--.",
        "--.-",".-.","...","-","..-","...-",
        ".--","-..-","-.--","--.."
    ]
    const unique = new Set()
    
    for (let word of words) {

        let str = ''
        for (let char of word) {
            str += chars[char.charCodeAt(0) - 97]
        }

        unique.add(str)
    }

    return unique.size
};