/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// First Attempt:
// Runtime: 70 ms, Beats 99.79% of JS users
// Memory: 47.97 mb, Beats 53.02%
var findMedianSortedArrays = function(nums1, nums2) {
    var sortedArr = nums1.concat(nums2).sort((a, b) => a - b)
    if (sortedArr.length % 2 == 0){
        let left = sortedArr[Math.floor(sortedArr.length/2) - 1]
        let right = sortedArr[Math.floor(sortedArr.length/2)]
        return ((left + right) / 2)
    } else {
        return sortedArr[Math.floor(sortedArr.length/2)]
    }
};
