/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 92 ms, Beats 87.17% of JS users
// Memory: 61.84 mb, Beats 81.41% of JS users
var longestConsecutive = function(nums) {
  if (nums == null || nums.length === 0) { return 0; }
  
  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    if (set.has(num - 1)) { continue; }

    let currNum = num;
    let currMax = 1;

    while (set.has(currNum + 1)) {
      currNum++;
      currMax++;
    }
    max = Math.max(max, currMax);
  }
  return max;
};
