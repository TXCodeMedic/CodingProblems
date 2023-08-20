/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Second Attempt: Two Pointers
// Runtime: 141 ms, Beats 95.22% of JS users
// Memory: 58.88 mb, Beats 68.17% of JS users
var threeSum = function(nums) {
    var result = [];
    // Sort the array so that a two pointer solution approach can be used 
    nums = nums.sort((a, b) => a - b);

    //iterate through the array, and leave room for the two pointers
    for (let i = 0; i < nums.length - 2; i++) {
        // Array is sorted left to right, so if nums[i] is greater than 0, there is no possible way to hit 0
        if (nums[i] > 0) break;
        // if a repeat is found, skip the index and increase i.
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        else {
            // two pointer approach will have left pointer start one index in fron of i and right will be at the end
            var left = i + 1;
            var right = nums.length - 1;

            while (left < right) {
                var curSum = nums[i] + nums[left] + nums[right];
                // if curSum is less than zero, we need to increment left in order to find larger values
                if (curSum < 0) left++;
                // if curSum is greater than zero, we need to deincrement right in order to find smaller values
                else if (curSum > 0) right-- ;
                    
                // 0 is acheived
                else {
                    result.push([ nums[i], nums[left], nums[right] ])
                    // skip repeats
                    while(nums[left] === nums[left + 1]) left++;
                    while(nums[right] === nums[right - 1]) right--;
                    // move pointers to see if other pairs with current i is acheiveable
                    left++;
                    right--;
                 }
            }
        }
    }
    return result;
};
