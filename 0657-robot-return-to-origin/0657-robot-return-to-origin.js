/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let n = moves.length
    let up = 0, down = 0, right = 0, left = 0

    for(let i = 0; i < n; i++){
        switch(moves[i]){
            case 'U':
              up++
              break
            case 'D':
              down++
              break
            case 'L':
              left++
              break
            case "R":
              right++
              break
        }
    }

    let vertical = up - down
    let horizontal = right - left

    console.log(up, down, right, left)
    return vertical === 0 && horizontal === 0 ? true : false
};