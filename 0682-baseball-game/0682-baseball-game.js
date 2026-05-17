/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let records = []

    for(let op of operations){
        let num = Number(op)
        
        if(!isNaN(num)){
            records.push(num)
            continue
        }

        let lastNum = records.at(-1)

        switch(op){
            case "C":
              records.pop()
              break;
            case "D":
              records.push(lastNum * 2)
              break;
            case "+":
              let secondLast = records.at(-2)
              records.push(lastNum + secondLast)
              break;
        }

    }

    if (records.length === 0) {
        return 0;
    }

    let sum = records.reduce((sum, val) => sum + val, 0)
    return sum
};