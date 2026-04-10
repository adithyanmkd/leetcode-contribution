/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    // person 1 steps
    const p1Steps = Math.abs(z - x)

    // person 2 steps
    const p2Steps = Math.abs(z - y)

    // if both are in equal distance return 0
    if (p1Steps === p2Steps) return 0

    // if person 1 have few steps return person one(1) 
    // else return person two(2)
    return p1Steps < p2Steps ? 1 : 2
};