# Reverse the string using StringBuilder

# reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"

def palindrome(string = "palindrome"):
    backwards = ""
    for i in range(len(string), 0, -1):
        backwards += string[i-1]
    return backwards

reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"
output = palindrome(reversed)
print(output)
