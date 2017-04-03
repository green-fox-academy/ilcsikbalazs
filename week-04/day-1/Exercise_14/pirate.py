import random


class Pirate:

    def __init__(self, toxic_lvl=0, dies=False):
        self.toxic_lvl = toxic_lvl
        self.dies = dies

    def drink_some_rum(self):
        self.toxic_lvl += 1
        if self.toxic_lvl >= 4 and self.dies==False:
            print("Pirate passed out! ")
        elif self.dies == True:
            print("You already died! ")

    def hows_it_going_mate(self):
        if self.toxic_lvl < 4 and self.dies==False:
            print("Pour me anudder!")
        elif self.toxic_lvl >= 4 and self.dies==False:
            print("Arghh, I'ma Pirate. How d'ya d'ink its goin?")
        elif self.dies == True:
            print("You already died! ")

    def die(self):
        self.dies = True
        print("Pirate died! ")

    def brawl(self,other_pirate):
        chance = random.randint(1,3)
        if (self.dies==False) and (other_pirate.dies==False):
            if chance == 1:
                self.dies = True
                print("Your pirate died!")
            elif chance == 2:
                other_pirate.dies = True
                print("Enemy pirate died!")
            elif chance == 3:
                print("Both passed out!")


jack = Pirate()
bluebeard = Pirate()

jack.brawl(bluebeard)
