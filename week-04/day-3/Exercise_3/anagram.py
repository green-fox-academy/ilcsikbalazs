# Anagram

# Write a function, that takes two strings and returns a 
# boolean value based on if the two strings are Anagramms or not.

# Create a test for that.

class Anagram:
    
    def anagram_checker(self,string_a, string_b):
        self.result = False
        for i in self.string_a:
            if i in self.string_b:
                print(i)



