# Write a program that reads a number from the standard input, then draws a
# triangle like this:
#
# *
# **
# ***
# ****
#
# The triangle should have as many lines as the number was

number = int(input("Give me a number: "))
number += 1
for i in range(1, number):
    print(i * "*")
