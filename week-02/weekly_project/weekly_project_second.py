# Create a function that searches for all the palindromes in a string_forward that are at least 3 characters, and returns a list with the found palindromes. Example:
#
# output = search_palindromes('dog goat dad duck doodle never')
# print(output) # it prints: ['og go', ' dad ', 'd d', 'dood', 'eve']



def palindrome_searcher(input_strings):
    output=[]
    for lenght_of_string in range(3,len(input_strings)+1):
        for i in range(len(input_strings)):
            string_forward = input_strings[i:i+lenght_of_string]
            backwards = ""
            for j in range(len(string_forward), 0, -1):
                backwards += string_forward[j-1]
            if(string_forward == backwards and len(string_forward) == lenght_of_string):
                output.append(string_forward)
    return output

default_strings = 'dog goat dad duck doodle never'

want_to_input = str(input("Want to give me a string (yes or no)? "))
if want_to_input == "yes":
    input_a_str = str(input("Input a string: "))
    default_strings = input_a_str
else:
    print("You didn't want to input anything so we will use the default string")


stringer = palindrome_searcher(default_strings)
print("This was the input: ",default_strings)
print("This is the result: ",stringer)
