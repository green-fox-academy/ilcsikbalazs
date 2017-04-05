import unittest
from anagram import Anagram

class Test_anagram(unittest.TestCase):
    def test_anagram_samesizestings(self):
        anagrams = Anagram("test", "sett")
        anagrams.anagram_checker()
        self.assertEquals(anagrams.anagram_checker(), True)
    def test_anagram_longerstring(self):
        anagrams = Anagram("teeest", "sett")
        anagrams.anagram_checker()
        self.assertEquals(anagrams.anagram_checker(), False)
    def test_anagram_otherstring(self):
        anagrams = Anagram("tlst", "sett")
        anagrams.anagram_checker()
        self.assertEquals(anagrams.anagram_checker(), False)

if __name__ == "__main__":
    unittest.main()