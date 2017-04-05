import unittest
from cows_bulls import CAB

class Test_CAB(unittest.TestCase):
    def test_randomizer(self):
        game = CAB()
        game.randomizer()
        self.assertEquals(len(game.randomizer()), 4)

    def test_guess(self):
        game = CAB()
        game.randomizer()
        game.guess(5)
        self.assertAlmostEquals()

    def test_cow_bull(self):
        


if __name__ == "__main__":
    unittest.main()

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