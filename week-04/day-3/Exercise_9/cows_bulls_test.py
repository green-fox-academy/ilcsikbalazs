import unittest
from cows_bulls import CAB

class Test_CAB(unittest.TestCase):
    def test_randomizer(self):
        game = CAB()
        game.randomizer()
        self.assertEquals(len(game.randomizer()), 4)


if __name__ == "__main__":
    unittest.main()