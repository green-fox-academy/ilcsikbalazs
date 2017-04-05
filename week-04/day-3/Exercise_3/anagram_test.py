import unittest
from anagram import Anagram

class Test_anagram(unittest.TestCase):
    def test_anagram_print(self):
        anagrams = Anagram()
        anagrams.anagram_checker("test", "sett")
        self.assertEquals(anagrams.anagram_checker(), "test")

if __name__ == "__main__":
    unittest.main()