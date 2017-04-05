# Count Letters

# Write a function, that takes a string as an argument and returns a 
# dictionary with all letters in the string as keys, and numbers as 
# values that shows how many occurrences there are.
# Create a test for that.
class Letters:
    def __init__(self,string="abcdefghijkabcsdklvknsccc",dictionary={}):
        self.dictionary = dictionary
        self.string = string
    
    def letter_counter(self):
        for i in self.string:
            self.dictionary[i] = self.string.count(i)
        return self.dictionary

