// First Attempt -- Brute Force  O(N^2)
// Runtime: 67 ms, Beats 69.07% of JS users
// Memory: 41.81 mb, BEats 93.04% of JS users
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++){
        var newTar = target - nums[i]
        for (let j = i + 1; j < nums.length; j++){
            if (nums[j] == newTar) {
                return [i, j]
            }
        }
    }
};

// Second Attempt -- Hashmap RT: O(N)  M:O(N)
// Runtime: 58ms, beats 88.88% of JS users
// Memory: 42.50 mb, Beats 61.02% of JS users
var twoSum = function(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (hash[complement] !== undefined) {
        return [hash[complement], i];
    }
    hash[nums[i]] = i;
  }
}
