# Create a function that searches for all the palindromes in a string that are at least 3 characters, and returns a list with the found palindromes. Example:
#
# output = search_palindromes('dog goat dad duck doodle never')
# print(output) # it prints: ['og go', ' dad ', 'd d', 'dood', 'eve']


all_strings = 'dog goat dad duck doodle never'

def palindrome_searcher(input_strings):
    output=[]
    for lenght_of_string in range(3,len(input_strings)+1):
        for i in range(len(input_strings)):
            string = input_strings[i:i+lenght_of_string]
            backwards = ""
            for j in range(len(string), 0, -1):
                backwards += string[j-1]
            if(string == backwards and len(string) == lenght_of_string):
                output.append(string)
    return output


stringer = palindrome_searcher(all_strings)
print(stringer)
