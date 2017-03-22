# Write a program that stores a number, and the user has to figure it out.
# The user can input guesses, after each guess the program would tell one
# of the following:
#
# The stored number is higher
# The stried number is lower
# You found the number: 8

number = int(input("Guess a number: "))

import random
r = random.randrange(0,10)
print(r)

found = 0

while found == 1:
    if number == r:
        print("You found the number: " + str(r))
        found += 1
    elif number > r:
        print("The stored number is lower")
    elif number < r:
        print("The stored number is higher")
