/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

class BrowserHistory {
    constructor(homepage) {
        this.index = 0
        this.length = 1
        this.history = [homepage]
    }

    visit(url) {
        if (this.history.length < this.index + 2) {
            this.history.push(url)
        } else {
            this.history[this.index + 1] = url
        }

        this.index++
        this.length = this.index + 1
    }

    back(steps) {
        this.index = Math.max(this.index - steps, 0)
        return this.history[this.index]
    }

    forward(steps) {
        // steps = 7, index = 5, length = 8
        this.index = Math.min(this.index + steps, this.length - 1)
        return this.history[this.index]
    }
}