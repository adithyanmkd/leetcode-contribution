// /**
//  * @param {number} big
//  * @param {number} medium
//  * @param {number} small
//  */
// var ParkingSystem = function(big, medium, small) {
    
// };

// /** 
//  * @param {number} carType
//  * @return {boolean}
//  */
// ParkingSystem.prototype.addCar = function(carType) {
    
// };

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */


class ParkingSystem {
    constructor(big, medium, small) {
        this.big = big
        this.medium = medium
        this.small = small
    }

    // 1 -> big
    // 2 -> medium
    // 3 -> small
    addCar(carType) {
        let type

        // if (carType === 1) {
        //     type = 'big'
        // } else if (carType === 2) {
        //     type = 'medium'
        // } else if (carType === 3) {
        //     type = 'small'
        // }

        switch (carType) {
            case 1:
              type = 'big'
              break
            case 2:
              type = 'medium'
              break
            case 3:
              type = 'small'
              break
        }
        
        const isAvailable = this[type] > 0
        if (isAvailable) {
            this[type]--
            return true
        }

        return false
    }
}