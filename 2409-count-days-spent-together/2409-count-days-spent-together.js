/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // number of days per month

    const aliceArrive = arriveAlice.split("-")
    const aliceLeave = leaveAlice.split("-")
    const bobArrive = arriveBob.split("-")
    const bobLeave = leaveBob.split("-")

    const aliceMonth = Number(aliceArrive[0]) - 1
    const aliceDate = Number(aliceArrive[1])
    let aliceArrivalDay = 0

    for (let i = 0; i < aliceMonth; i++) {
        aliceArrivalDay += months[i]
    }

    aliceArrivalDay += aliceDate

    const bobMonth = Number(bobArrive[0]) - 1
    const bobDate = Number(bobArrive[1])
    let bobArrivalDay = 0

    for (let i = 0; i < bobMonth; i++) {
        bobArrivalDay += months[i]
    }

    bobArrivalDay += bobDate

    const aliceLeaveMonth = Number(aliceLeave[0]) - 1
    const aliceLeaveDate = Number(aliceLeave[1])
    let aliceDepartureDay = 0

    for (let start = 0; start < aliceLeaveMonth; start++) {
        aliceDepartureDay += months[start]
    }

    aliceDepartureDay += aliceLeaveDate

    const bobLeaveMonth = Number(bobLeave[0]) - 1
    const bobLeaveDate = Number(bobLeave[1])
    let bobDepartureDay = 0

    for (let start = 0; start < bobLeaveMonth; start++) {
        bobDepartureDay += months[start]
    }

    bobDepartureDay += bobLeaveDate

    console.log(aliceArrivalDay, bobArrivalDay, aliceDepartureDay, bobDepartureDay)

    const start = Math.max(aliceArrivalDay, bobArrivalDay)
    const end = Math.min(aliceDepartureDay, bobDepartureDay)

    if (start > end) {
        return 0 
    } else {
        return end - start + 1
    }
};