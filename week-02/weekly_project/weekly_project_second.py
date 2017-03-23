# Create a function that searches for all the palindromes in a string that are at least 3 characters, and returns a list with the found palindromes. Example:
#
# output = search_palindromes('dog goat dad duck doodle never')
# print(output) # it prints: ['og go', ' dad ', 'd d', 'dood', 'eve']


all_strings = 'dog goat dad duck doodle never'
# for i in range(len(all_strings)):
#     all_strings = all_strings.replace(" ","")
# #doggoatdadduckdoodlenever
def palindrome_searcher(put_strings_here):
    output=[]
    for x in range(3,6):
        for i in range(len(put_strings_here)):
            string = all_strings[i-x:i]
            backwards = ""
            for j in range(len(string), 0, -1):
                backwards += string[j-1]
            if(string == backwards and len(string) == x):
                output.append(string)
    return output


stringer = palindrome_searcher('dog goat dad duck doodle never')
print(stringer)
# for i in range(len(all_strings)):
#     string = all_strings[i-4:i]
#     backwards = ""
#     for j in range(len(string), 0, -1):
#         backwards += string[j-1]
#     if(string == backwards):
#         print(string)
#
# for i in range(len(all_strings)):
#     string = all_strings[i-5:i]
#     backwards = ""
#     for j in range(len(string), 0, -1):
#         backwards += string[j-1]
#     if(string == backwards):
#         print(string)
