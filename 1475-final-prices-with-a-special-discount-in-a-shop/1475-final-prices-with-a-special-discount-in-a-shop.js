/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const n = prices.length

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (j > i && prices[j] <= prices[i]) {
                prices[i] = prices[i] - prices[j] // apply discount
                break
            }
        }
    }

    return prices
};