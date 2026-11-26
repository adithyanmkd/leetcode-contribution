/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    let isAliceWin = true
    let remove = 10
    let player = "alice"

    while (n > 0) {
        let balance = n - remove

        if (player === "alice") {
            if (balance < 0) {
                return false
            } else {
                n = balance
                remove--
                player = "bob"
            }
        } else {
            if (balance < 0) {
                return true
            } else {
                n = balance
                remove--
                player = "alice"
            }
        }
    }

    // 49, 39, 30, 22, 15, 9, 4, 0
    console.log(player)
    
    return player === "bob" ? true : false
};