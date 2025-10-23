/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    let digits = s
    // let count = 0

    while (digits.length > 2) {
        let build = ""
        // count++

        for (let i = 0; i < digits.length - 1; i++) {
            let num = (Number(digits[i]) + Number(digits[i + 1])) % 10
            // console.log(s[i], s[i + 1], '|', count)
            build += num
        }

        digits = build
        // console.log(typeof digits)
    }

    console.log(digits)
    return digits[0] === digits[1]
};