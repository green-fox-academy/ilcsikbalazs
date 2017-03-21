# Write a program that reads a number from the standard input, then draws a
# pyramid like this:
#
#
#    *
#   ***
#  *****
# *******
#
# The pyramid should have as many lines as the number was

number = int(input("Give me a number: "))
number += 1
for i in range(1, number, 2):
    print(int((number - i)/2)*" ", i * "*")
