/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const loserFreq = new Map() // player, losing count
    const winnerFreq = new Map() // player, winning count
    const playerMatches = new Map() // player, match count
    
    for (let [winner, loser] of matches) {
        loserFreq.set(loser, (loserFreq.get(loser) || 0) + 1)
        winnerFreq.set(winner, (winnerFreq.get(winner) || 0) + 1)

        playerMatches.set(winner, (playerMatches.get(winner) || 0) + 1)
        playerMatches.set(loser, (playerMatches.get(loser) || 0) + 1)
    }

    const res = [new Set(), new Set()]

    for (let [winner, loser] of matches) {
        if (loserFreq.get(loser) === 1) {
            res[1].add(loser)
        }

        if (playerMatches.get(winner) === winnerFreq.get(winner)) {
            res[0].add(winner)
        }
    }

    const sorted = [[...res[0]].sort((a, b) => a - b), [...res[1]].sort((a, b) => a - b)]
    return sorted
};