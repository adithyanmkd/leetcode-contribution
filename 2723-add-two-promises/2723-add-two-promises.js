/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {

    return new Promise(async (res, rej) => {
        let val1 = await promise1.then((val) => {
            return val
        })

        let val2 = await promise2.then((val) => {
            return val
        })

        res(val1 + val2)
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */