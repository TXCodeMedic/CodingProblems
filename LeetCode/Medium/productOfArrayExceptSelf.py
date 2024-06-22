# Runtime: 270 ms, Beats 57.36% of Python users, 
# Memory: 25.54 MB, Beats 92.68% of Python users
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = [1] * len(nums)
        leftMult = 1
        rightMult = 1

        for i in range(0, len(nums)):
            result[i] = leftMult
            leftMult *= nums[i]

        for i in range(len(nums) - 1,-1, -1):
            result[i] *= rightMult
            rightMult  *= nums[i]
        return result 
