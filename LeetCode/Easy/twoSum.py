# Runtime: 54 ms, Beats 84.93% of Python users
# Memory: 17.73 mB, Beats 32.80% of Python users

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {}

        for i, j in enumerate(nums):
            difference = target - j
            if difference in hashMap:
                return [hashMap[difference], i]
            hashMap[j] = i
