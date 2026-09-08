class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False 

        return self.charHash(s) == self.charHash(t)

    def charHash(self, string: str) -> str:
        charArr = [0] * 26

        for char in string:
            charArr[ord(char) - ord('a')] += 1

        return charArr