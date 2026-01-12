/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    const n = points.length
    let ans = 0

    for (let i = 0; i < n - 1; i++) {
      const [currX, currY] = points[i]
      const [targetX, targetY] = points[i + 1]

      ans += Math.max(Math.abs(targetX - currX), Math.abs(targetY - currY))
    }

    return ans
};