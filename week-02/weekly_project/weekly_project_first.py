def palindrome(string = "pear"):
    backwards = ""
    for i in range(len(string), 0, -1):
        backwards += string[i-1]
    return string + backwards

output = palindrome(str(input("Input a word! ")))
print(output)
