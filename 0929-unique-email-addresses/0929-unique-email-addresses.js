/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const set = new Set()

    for (let email of emails) {
        const splitted = email.split('@')
        const firstPart = splitted[0].replaceAll('.', '').split('+')[0]

        const mail = `${firstPart}@${splitted[1]}`
        set.add(mail)
    }

    return set.size
};