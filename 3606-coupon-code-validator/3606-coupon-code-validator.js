/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (code, businessLine, isActive) {
    const n = code.length 
    const pattern = /^[A-Za-z0-9_]+$/
    const categories = new Set(["electronics", "grocery", "pharmacy", "restaurant"])
    const validCoupons = [[], [], [], []]

    const isValidCoupon = (coupon) => {
        // for debug 👇🏻
        // console.log(coupon.code, '|', pattern.test(coupon.code), '|', categories.has(coupon.category))
        
        if (
            pattern.test(coupon.code) && 
            categories.has(coupon.category) &&
            coupon.isActive
        ) return true
        return false
    }

    for (let i = 0; i < n; i++) {
        const coupon = {
            code: code[i],
            category: businessLine[i],
            isActive: isActive[i]
        }

        if (isValidCoupon(coupon)) {
            switch (coupon.category) {
                case 'electronics':
                  validCoupons[0].push(coupon.code)
                  break
                case 'grocery':
                  validCoupons[1].push(coupon.code)
                  break
                case 'pharmacy':
                  validCoupons[2].push(coupon.code)
                  break
                case 'restaurant':
                  validCoupons[3].push(coupon.code)
                  break
            }
        }
    }

    for (let coupons of validCoupons) {
        coupons.sort() // order code in lexicographical (ascending)
    }

    return [...validCoupons.flat()]
};