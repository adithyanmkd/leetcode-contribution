class Bank {
    constructor(accountBalances) {
        // storing all balance 
        this.accountBalances = accountBalances // []
    }

    transfer(senderAccount, receiverAccount, money) {
        if (!this.isValidAccount(senderAccount) || !this.isValidAccount(receiverAccount)) {
            return false
        } 
        // we'll get the sender account balance
        const senderAccountBal = this.accountBalances[senderAccount - 1] 

        if (money > senderAccountBal) {
            return false
        }

        this.accountBalances[receiverAccount - 1] += money // credit money
        this.accountBalances[senderAccount - 1] -= money // debit money

        return true
    }

    withdraw(account, money) {
        if (!this.isValidAccount(account)) {
            return false
        } 

        const balance = this.accountBalances[account - 1] // get the current balance

        if (money > balance) {
            return false
        }

        this.accountBalances[account - 1] -= money
        return true
    }

    deposit(account, money) {
        const userAccount = this.accountBalances[account - 1]

        if (!this.isValidAccount(account)) {
            return false
        } 

        this.accountBalances[account - 1] += money
        return true
    }

    // utils
    isValidAccount(account) {
        return this.accountBalances[account - 1] !== undefined
    }
}