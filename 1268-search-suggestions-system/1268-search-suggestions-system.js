class TrieNode {
    constructor(val = "") {
        this.val = val
        this.children = new Map()
        this.endOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let currNode = this.root

        for (let char of word) {
            if (!currNode.children.has(char)) {
                const newNode = new TrieNode(char)
                currNode.children.set(char, newNode)
            }

            currNode = currNode.children.get(char)
        }

        currNode.endOfWord = true
    }

    getLastNode(word) {
        let currNode = this.root

        for (let char of word) {
            if (!currNode.children.has(char)) return null
            currNode = currNode.children.get(char)
        }

        return currNode
    }

    suggestions(prefix) {
        const words = []
        let currNode = this.getLastNode(prefix)

        if (!currNode) return words

        if (currNode.endOfWord) {
            words.push(prefix)
        }

        currNode.children.forEach(child => {
            this.getWordsFrom(child, prefix, words)
        })

        return words
    }

    getWordsFrom(node, string = '', arr = []) {
        if (!node) return

        string += node.val

        if (node.endOfWord) {
            arr.push(string)
        }

        node.children.forEach((child) => {
            this.getWordsFrom(child, string, arr)
        })
    }
}


/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    const trie = new Trie()
    products.forEach((product) => trie.insert(product))

    const allSuggestions = []

    let searchPrefix = ''
    for (let i = 0; i < searchWord.length; i++) {
        searchPrefix += searchWord[i]

        let words = trie.suggestions(searchPrefix)
        words.sort() // sorted lexicographically
        allSuggestions.push(words.slice(0, 3))
    }

    console.log(allSuggestions)
    return allSuggestions
};