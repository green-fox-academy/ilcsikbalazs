# Apples

# Create a class, with one method (eg. get_apple()) that returns a string (eg. "apple")
# Create a test for that:
# Create a test class
# Create a test method

# Instantiate an Object from your class in the method
# Use the assertEquals()
# The expected parameter should be the same string (eg. "apple")
# The actual parameter should be the return value of the method (eg. myobject.get_apple())
# Run the test
# Change the expected value to make the test failing
# Run the test
# Fix the returned value to make the test succeeding again

class Apple:
    def __init__(self,apple="apple"):
        self.apple=apple
    def return_apple(self):
        return self.apple