/**
 * Try all the pairs in the array and see if any of them add up to the target number.
 * @param nums Array of integers.
 * @param target Integer target.
 * @return Indices of the two numbers such that they add up to target.
 */
class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray{
    for (index1 in nums.indices) {
        val startIndex = index1 + 1
        for (index2 in startIndex..nums.lastIndex) {
            if (nums[index1] + nums[index2] == target) {
                return intArrayOf(index1, index2)
            }
        }
    }
        return intArrayOf(0,1)
    }
}