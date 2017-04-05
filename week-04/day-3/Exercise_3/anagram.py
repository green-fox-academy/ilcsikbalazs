# Anagram

# Write a function, that takes two strings and returns a 
# boolean value based on if the two strings are Anagramms or not.

# Create a test for that.

class Anagram:
    def __init__(self,string_a="test", string_b="tste", is_anagram = False):
        self.is_anagram = False
        # self.string_a = []        
        # for i in string_a:
        #     self.string_a
        self.string_b = string_b
        self.string_a = string_a       
        
    
    def anagram_checker(self):
        if len(self.string_a) != len(self.string_b):
            self.is_anagram = False
            return self.is_anagram
            
        for i in self.string_a:
            if i in self.string_b:
                self.is_anagram = True
                return self.is_anagram
            else: 
                self.is_anagram = False
                return self.is_anagram

anagrams = Anagram()
anagrams.anagram_checker()


