# - Create an array variable named `s`
#   with the following content: `[1, 2, 3, 8, 5, 6]`
# - Change the 8 to 4
# - Print the fourth element

s = [1, 2, 3, 8, 5, 6]

a = s.index(8)
s[a] = 4

print(s)
