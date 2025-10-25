/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let monday = 1
    let balance = 0
    let cash = 1

    for (let i = 1; i <= n; i++ ){
        // console.log('monday:', monday, "|", 'cash:', cash, '|', 'balance:', balance)
        balance += cash
        cash++

        if (i % 7 === 0) {
            monday++
            cash = monday
        }
    }

    // console.log(balance)
    return balance
};