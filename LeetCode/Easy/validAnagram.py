# Runtime: 41 ms, Beats 89.19% of Python users
# Memory: 17 mB, Beats 53.40% of Python users
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        # return (sorted(s) == sorted(t))
        count = {}

        for i in range(len(s)):
            count[s[i]] = 1 + count.get(s[i], 0)
            count[t[i]] = count.get(t[i], 0) - 1

        for key in count:
            if count[key] != 0:
                return False

        return True
