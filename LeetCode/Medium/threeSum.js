// Fix later 79/312 TC passed
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [];
    nums = nums.sort((a, b) => a - b);
    console.log(nums)
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        else {
            let left = i + 1;
            let right = nums.length - 1;
            console.log('i: ', i, nums[i])
            while (left < right) {
                console.log(left, right)
                let curSum = nums[i] + nums[left] + nums[right];
                if (curSum < 0) {
                    left += 1
                }
                else if (curSum > 0) {
                    right -= 1
                } else {
                    result.push( [nums[i], nums[left], nums[right] ] );
                    left += 1
                }
            }
        }
    }
    return result;
};
