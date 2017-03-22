# Write a program that reads a number from the standard input, then draws a
# square like this:
#
#
# %%%%%
# %   %
# %   %
# %   %
# %   %
# %%%%%
#
# The square should have as many lines as the number was

number = int(input("Give me a number: "))
for i in range(1, number):
    if i == 1:
        print(number * "%")
    else:
        print("%" + (number-2) * " " + "%")
    if i == (number-1):
        print(number * "%")
