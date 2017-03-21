# Create a program that asks for two numbers
# If the second number is not bigger than the first one it should print:
# "The second number should be bigger"
#
# If it is bigger it should count from the first number to the second by one
#
# example:
#
# first number: 3, second number: 6, should print:
#
# 3
# 4
# 5

i1 = int(input("Give me a number: "))
i2 = int(input("Give me another number: "))

if(i1 > i2):
    print("The second number should be bigger")

if(i2 > i1):
    for i1 in range(i1, i2):
        print(i1)
