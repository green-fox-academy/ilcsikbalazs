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
# All methods, including constructor should be tested
import random

class CAB:
    def __init__(self, game_state="playing", guess_counter=0):
        self.number_list = []
        self.game_state = game_state
        self.guess_counter = guess_counter

    def randomizer(self):
        if len(self.number_list) >= 4:
            pass
        else:
            for i in range(0,4):
                n = random.randint(1,9)
                self.number_list.append(n)
        return self.number_list

