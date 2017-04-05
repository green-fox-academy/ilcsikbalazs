# Count Letters

# Write a function, that takes a string as an argument and returns a 
# dictionary with all letters in the string as keys, and numbers as 
# values that shows how many occurrences there are.
# Create a test for that.
import unittest
from count_letters import Letters

class Test_letters(unittest.TestCase):
    def test_count_letters(self):
      letters = Letters("aab")
      letters.letter_counter()
      self.assertEquals(letters.letter_counter(), {'a':2, 'b':1})  
        

if __name__ == "__main__":
    unittest.main()