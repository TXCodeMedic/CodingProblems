# Runetime: 89 ms, Beats 59.97% of Python users
# Memory: 19.25 mB, Beats 98.21 of Python users

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashMap = {}

        for word in strs:
            if str(''.join(sorted(word))) in hashMap:
                hashMap[str(''.join(sorted(word)))].append(word)
            else:
                hashMap[str(''.join(sorted(word)))] = [word]

        result = []

        for key in hashMap:
            result.append(hashMap[key])

        return result
