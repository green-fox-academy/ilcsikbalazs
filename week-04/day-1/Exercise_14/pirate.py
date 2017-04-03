import random


class Pirate:

    def __init__(self, toxic_lvl=0, dies=False, passed_out=False):
        self.toxic_lvl = toxic_lvl
        self.dies = dies
        self.passed_out = passed_out

    def drink_some_rum(self):
        self.toxic_lvl += 1
        if self.toxic_lvl >= 4:
            self.pass_out() = True

    def hows_it_going_mate(self):
        if self.toxic_lvl < 4:
            print("Pour me anudder!")
        elif self.toxic_lvl >= 4:
            print("Arghh, I'ma Pirate. How d'ya d'ink its goin?")

    def die(self):
        self.dies = True
        print("Your pirate died!")

    def brawl(self,other_pirate):
        chance = random.randint(1,3)
        if chance == 1:
            self.die()
        elif chance == 2:
            other_pirate.die()
            print("Enemy pirate died!")
        elif chance == 3:
            self.pass_out()
            other_pirate.pass_out()
            print("Both passed out!")

    def pass_out(self):
        self.passed_out = True
        print("Pirate passed out")



jack = Pirate()
blue = Pirate()

# class Ship:
