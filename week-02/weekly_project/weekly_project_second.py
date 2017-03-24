# Create a function that searches for all the palindromes in a string that are at least 3 characters, and returns a list with the found palindromes. Example:
#
# output = search_palindromes('dog goat dad duck doodle never')
# print(output) # it prints: ['og go', ' dad ', 'd d', 'dood', 'eve']


all_strings = 'dog goat dad duck doodle never'

def palindrome_searcher(put_strings_here):
    output=[]
    for x in range(3,6):
        for i in range(len(put_strings_here)):
            string = put_strings_here[i:i+x]
            backwards = ""
            for j in range(len(string), 0, -1):
                backwards += string[j-1]
            if(string == backwards and len(string) == x):
                output.append(string)
    return output


stringer = palindrome_searcher('all_strings')
print(stringer)
