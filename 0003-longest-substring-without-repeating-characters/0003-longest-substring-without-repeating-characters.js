/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0 || s.length === 1) return s.length

    const n = s.length
    let left = 0
    let maxLen = 0

    let set = new Set()

    for (let right = 0; right < n; right++) {
        if (set.has(s[right])) {
            // If current char already exists in the set, we need to shrink the window
            while (set.has(s[right])) {
                // Remove characters from the left until the duplicate is removed
                set.delete(s[left])
                left++
            }
        }

        set.add(s[right])
        maxLen = Math.max(maxLen, set.size)
    }

    return maxLen
};