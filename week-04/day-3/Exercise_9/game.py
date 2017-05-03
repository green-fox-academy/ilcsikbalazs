# Cows and Bulls

# Create a class what is capable of playing exactly
# one game of Cows and Bulls (CAB). The player have to
# guess a 4 digit number. For every digit that the player
# guessed correctly in the correct place, they have a
# “cow”. For every digit the player guessed correctly
# in the wrong place is a “bull.”

# The CAB object should have a random 4 digit number,
#  which is the goal to guess.
# The CAB object should have a state where the game
#  state is stored (playing, finished).
# The CAB object should have a counter where it
#  counts the guesses.
# The CAB object should have a guess method,
#  which returns a string of the guess result
import random

class CAB:
    def __init__(self, game_state="playing", guess_counter=0, result=None):
        self.result = result
        self.random_list = []
        self.game_state = game_state
        self.guess_counter = guess_counter

    def randomizer(self):
        if len(self.random_list) >= 4:
            pass
        else:
            for i in range(0,4):
                n = random.randint(1,9)
                self.random_list.append(n)
        return self.random_list

    def guess(self):
        print(self.random_list)
        results = []
        guess_list = [int(input()),int(input()),int(input()),int(input())]
        print(guess_list)
        if self.random_list[0]==guess_list[0]:
            results.append("cow")
        if self.random_list[1]==guess_list[1]:
            results.append("cow")
        if self.random_list[2]==guess_list[2]:
            results.append("cow")
        if self.random_list[3]==guess_list[3]:
            results.append("cow")
        else:
            for i in guess_list:
                if (i in self.random_list):
                    results.append("bull")

        print(results)

game = CAB()
game.randomizer()
game.guess()