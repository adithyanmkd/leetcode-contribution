/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    const n = bank.length
    let beams = [] // store each row beams

    for (let str of bank) {
        let beamCount = 0 // each row beam count

        for (let char of str) {
            beamCount += Number(char)
        }

        if (beamCount !== 0) {
            beams.push(beamCount)
        }
    }

    let laserCount = 0
    for (let i = 1; i < beams.length; i++) {
        // console.log(beams[i - 1], beams[i])
        laserCount += beams[i - 1] * beams[i]
    }
    
    // console.log(laserCount)
    return laserCount
};