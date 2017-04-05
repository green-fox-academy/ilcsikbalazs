import unittest
from anagram import Anagram

class Test_anagram(unittest.TestCase):
    def test_anagram_print(self):
        anagrams = Anagram("test", "sett")
        anagrams.anagram_checker()
        self.assertEquals(anagrams.anagram_checker(), True)

if __name__ == "__main__":
    unittest.main()