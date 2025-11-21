/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const n = s.length
    const mapST = new Map()
    const mapTS = new Map()

    for (let i = 0; i < n; i++) {
        const [ c1, c2 ] = [ s[i], t[i] ]

        if (
            (mapST.has(c1) && mapST.get(c1) !== c2) || 
            (mapTS.has(c2) && mapTS.get(c2) !== c1)
            ) {
                return false
        }

        mapST.set(c1, c2)
        mapTS.set(c2, c1)
    }

    return true
};