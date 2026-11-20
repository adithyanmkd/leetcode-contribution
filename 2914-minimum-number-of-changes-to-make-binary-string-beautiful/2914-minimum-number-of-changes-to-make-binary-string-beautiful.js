/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    const n = s.length
    let changes = 0

    for (let i = 1; i < n; i += 2) {
        let curr = s[i]
        let prev = s[i - 1]

        if (curr !== prev) {
            changes++
        }
    }

    return changes
};

