/**
 * Given a non-empty array of integers nums, every element appears twice except for one. 
 * Find that single one.
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function (nums) {
    var number = new Number()
    var sortedNums = nums.sort()

    for (let i = 0; i < nums.length; i++) {
        try {
            if (sortedNums[i] === sortedNums[i + 1]) {
                i++
            }
            else {
                number = sortedNums[i]
            }

        } catch (arrayOutOfBoundException) {
            number = sortedNums[i]
        }
    }

    return number
};

console.log(singleNumber([-1,-1,-2]))