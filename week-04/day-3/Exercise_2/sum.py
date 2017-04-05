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
class Sum:
    def __init__(self):
        self.sum_list=[]
    
    def add_number(self,number=None):
        if number == None:
            return self.sum_list
        else:
            self.sum_list.append(number)

    def return_list(self):
        sum = 0
        for i in self.sum_list:
            sum += i
        return sum 
