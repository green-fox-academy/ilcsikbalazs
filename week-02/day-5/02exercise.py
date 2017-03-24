# I've the number between 1-100. You have 5 lives.
#
# 20
# Too high. You have 4 lives left.
#
# 10
# Too low. You have 3 lives left.
#
# 15
# Congratulations. You won!


import random
lives = 5
number = random.randint(1,100)
guess = int(input("Guess a number: "))
not_found = True


while not_found:
    if number == guess:
        print("yeaaah")
        not_found = False
    elif number > guess:
        print("Your gues is: ", guess)
        print("Too low")
        lives -= 1
        print("You live(s) left: ", lives)
        guess = int(input("Guess a number: "))

    elif number < guess:
        print("Your gues is: ", guess)
        print("Too high")
        lives -= 1
        print("You live(s) left: ", lives)
        guess = int(input("Guess a number: "))

    if lives == 0:
        print("You lose")
        break
