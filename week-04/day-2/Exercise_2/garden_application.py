# The Garden
# is able to hold unlimited amount of flowers or trees
# when watering it should only water those what needs water with equally divided amount amongst them
# eg. watering with 40 and 4 of them need water then each gets watered with 10
# The Flower
# needs water if its current water amount is less then 5
# when watering it the flower can only absorb the 75% of the water
# eg. watering with 10 the flower's amount of water should only increase with 7.5
# The Tree
# needs water if its current water amount is less then 10
# when watering it the tree can only absorb the 40% of the water
# eg. watering with 10 the tree's amount of water should only increase with 4

class Garden:
    def __init__(self):
        self.plants = []

    def add_plant(self,plant):
        self.plants.append(plant)

    def watering(self,water): #####
        wateramount_per_plant = water / len(self.plants)
        for i in self.plants:

class Plants:
    def __init__(self, current_water, type, min_water, name):
        self.current_water = current_water
        self.type = type
        self.min_water = min_water
        self.name = name

    def need_water(self):
        if self.current_water < self.min_water:
            print(self.name + self.type + "needs water")
        elif self.current_water >= self.min_water:
            print(self.name + self.type + "doesnt need water") 


class Flower(Plants):
    def __init__(self, current_water=20, type="Flower", min_water=5, name="yellow"):
        super().__init__(current_water,type,min_water)

class Tree(Plants):
    def __init__(self, current_water=20, type="Tree", min_water=10, name="purple"):
        super().__init__(current_water,type,min_water)
 

 