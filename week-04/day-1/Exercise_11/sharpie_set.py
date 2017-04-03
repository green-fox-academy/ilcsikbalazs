# Reuse your Sharpie class
# Create SharpieSet class
# it contains a list of Sharpie
# count_usable() -> sharpie is usable if it has ink in it
# remove_trash() -> removes all unusable sharpies

from sharpie import Sharpie

class SharpieSet:
    sharpie1 = Sharpie("green", 5, ink_amount=0)
    sharpie2 = Sharpie("black", 15,)
    sharpie3 = Sharpie("green", 15,)
    sharpie4 = Sharpie("green", 15, ink_amount=50)
    sharpie5 = Sharpie("green", 10, ink_amount=25)
    sharpie6 = Sharpie("green", 5, ink_amount=0)

    def __init__(self):
        self.sharpie_list = [sharpie1,sharpie2,sharpie3,sharpie4,sharpie5,sharpie6]

    def count_usable(self,sharpie):
        counter = 0
        for i in sel
        if sharpie.ink_amount > 0:
            counter +=
        else:
            return False

    def remove_trash(self):
