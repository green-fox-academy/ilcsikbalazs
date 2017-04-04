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

# class Garden:
#     def __init__(sel):

class Flower:

    def __init__(self,name="",water_amount=10):
        self.name = name
        self.water_amount = water_amount
        self.flower = []
        if self.water_amount < 5:
            print("Flower needs water")

    def watering(self,water,flower):
        if self.water_amount > 5:
            self.water_amount += water*0.75
        elif self.water_amount < 5:
            print("Flower doesn't need water!")

    def create_flower(self,flower):
        self.flower.append(flower)

    def info(self):
        print("{},{}".format(self.name,self.water_amount))

    flower = Flower()
    flower.watering(40,flower)
    flower.info()
