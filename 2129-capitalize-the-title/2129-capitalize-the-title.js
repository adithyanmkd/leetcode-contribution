/**
 * @param {string} title
 * @return {string}
 */

const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase() 
}
 
var capitalizeTitle = function(title) {
    const words = title.split(' ')
    const result = []

    for (let word of words) {
        if (word.length <= 2) {
            result.push(word.toLowerCase())
            continue
        }

        const capitalized = capitalize(word)
        result.push(capitalized)
    }

    console.log(result)
    return result.join(' ')
};