/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */

const getDay = (month, date) => {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // number of days per month
    let day = 0

    for (let start = 0; start < month; start++) {
        day += months[start]
    }

    return day += date
}

var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // number of days per month

    const aliceArrive = arriveAlice.split("-")
    const aliceLeave = leaveAlice.split("-")
    const bobArrive = arriveBob.split("-")
    const bobLeave = leaveBob.split("-")

    let aliceArrivalDay = getDay(Number(aliceArrive[0]) - 1, Number(aliceArrive[1]))
    let bobArrivalDay = getDay(Number(bobArrive[0]) - 1, Number(bobArrive[1]))
    let aliceDepartureDay = getDay(Number(aliceLeave[0]) - 1, Number(aliceLeave[1]))
    let bobDepartureDay = getDay(Number(bobLeave[0]) - 1, Number(bobLeave[1]))

    const start = Math.max(aliceArrivalDay, bobArrivalDay)
    const end = Math.min(aliceDepartureDay, bobDepartureDay)

    return start > end ? 0 : end - start + 1
};