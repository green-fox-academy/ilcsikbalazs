# Create a sum method in your class which has a list of integers as parameter
# It should return the sum of the elements in the list
# Follow these steps:
# Add a new test case
# Instantiate your class
# create a list of integers
# use the assertEquals to test the result of the created sum method
# Run it
# Create different tests where you
# test your method with an empyt list
# with a list with one element in it
# with multiple elements in it
# with a null
# Run them
# Fix your code if needed

import unittest
from sum import Sum

class Test_sum(unittest.TestCase):
    def test_return_emptylist(self):
        sum = Sum()
        sum.return_list()
        self.assertEquals(sum.return_list(), [])

    def test_return_oneelementlist(self):
        sum = Sum()
        sum.add_number(1)
        sum.return_list()
        self.assertEquals(sum.return_list(), [1])

    def test_return_moreelementlist(self):
        sum = Sum()
        sum.add_number(1)
        sum.add_number(1)
        sum.add_number(1)
        sum.add_number(1)
        sum.return_list()
        self.assertEquals(sum.return_list(), [1,1,1,1])



if __name__ == "__main__":
    unittest.main()