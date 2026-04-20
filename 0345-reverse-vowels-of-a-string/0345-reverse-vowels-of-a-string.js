/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let n = s.length
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let map = new Map()

    for(let i = 0; i < n; i++){
        if(vowels.includes(s[i])){
            map.set(i, s[i])
        }
    }

    let indexes = []
    let values = []

    map.forEach((val, index) => {
        indexes.push(index)
        values.push(val)
    })

    values.reverse()

    let splitted = s.split('')
    // console.log(splitted)

    let valLn = values.length

    for(let i = 0; i < valLn; i++){
        splitted.splice(indexes[i], 1, values[i])
    }

    return splitted.join('')
};