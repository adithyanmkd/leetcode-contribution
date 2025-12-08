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

    search(word) {
        let currNode = this.root

        for (let char of word) {
            if (!currNode.children.has(char)) return false
            currNode = currNode.children.get(char)
        }

        return currNode.endOfWord
    }

    startsWith(prefix) {
        let currNode = this.root

        for (let char of prefix) {
            if (!currNode.children.has(char)) return false
            currNode = currNode.children.get(char)
        }

        return true
    }
}


/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */