/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const n = prices.length
    let minPrice = prices[0]
    let profit = 0
    let maxProfit = 0

    for (let i = 1; i < n; i++) {
        // If the current price is lower than the minimum price seen so far,
        // update minPrice to the current price
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }

        // Calculate the profit if we sell at the current price
        profit = prices[i] - minPrice
        
        if (profit > maxProfit) {
            maxProfit = profit
        }
   }

   return maxProfit
};