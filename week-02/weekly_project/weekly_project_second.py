# Create a function that searches for all the palindromes in a string that are at least 3 characters, and returns a list with the found palindromes. Example:
#
# output = search_palindromes('dog goat dad duck doodle never')
# print(output) # it prints: ['og go', ' dad ', 'd d', 'dood', 'eve']


all_strings = 'dog goat dad duck doodle never'
# for i in range(len(all_strings)):
#     all_strings = all_strings.replace(" ","")
# #doggoatdadduckdoodlenever
for i in range(len(all_strings)):
    string = all_strings[i-3:i]
    backwards = ""
    for i in range(len(string), 0, -1):
        backwards += string[i-1]
    if(string == backwards):
        print(string)
